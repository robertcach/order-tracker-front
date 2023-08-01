"use client";

import { CUSTOMERS_LIST, PRODUCTS_LIST } from "@/constans";
import { useGetOrder } from "@/hooks/useGetOrder";
import { useUpdateOrder } from "@/hooks/useUpdateOrder";
import { OrderBody, Order } from "@/interfaces";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface ProductID {
  id: string;
  name: string;
  price: number;
}
export default function EditOrder({ params }: { params: { id: string } }) {
  const [selectedProducts, setSelectedProducts] = useState<ProductID[]>([]);
  const { register, handleSubmit, reset } = useForm();
  const { id } = params;

  useEffect(() => {
    useGetOrder(id).then((order: Order) => {
      const selectedProductsFromIDS = PRODUCTS_LIST.filter((product) =>
        order.productsID.includes(product.id)
      );

      setSelectedProducts(selectedProductsFromIDS);

      reset({
        customerID: order.customerID,
        total: order.total,
        productsID: order.productsID,
        status: order.status,
      });
    });
  }, []);

  const onSubmit = (data: any) => {
    const { customerID } = data;
    const selectedProductIDs = selectedProducts.map((product) => product.id);
    const totalPrice = selectedProducts.reduce((acc, current) => {
      return acc + current.price;
    }, 0);

    const updatedOrder: OrderBody = {
      customerID,
      total: totalPrice,
      productsID: selectedProductIDs,
      status: "Delivered",
    };

    useUpdateOrder(updatedOrder, id);
  };

  return (
    <div className="flex flex-col h-screen gap-5 p-24 bg-slate-100">
      <p>Edit order</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-5 p-5 bg-white"
      >
        <div>
          <label htmlFor="customerID">Customer</label>
          <select
            id="customerID"
            {...register("customerID")}
            className="form-inputs__select"
          >
            {CUSTOMERS_LIST.map((customer) => {
              return (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="productsID">Products</label>
          <div className="w-72">
            <Listbox
              value={selectedProducts}
              onChange={setSelectedProducts}
              multiple
            >
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">
                    {selectedProducts.length
                      ? selectedProducts.map((person) => person.name).join(", ")
                      : "Elegir productos"}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronUpDownIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {PRODUCTS_LIST.map((product) => (
                      <Listbox.Option
                        key={product.id}
                        value={product}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {product.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <button>Create Product</button>
      </form>
    </div>
  );
}
