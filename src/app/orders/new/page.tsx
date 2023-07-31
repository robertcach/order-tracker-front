"use client";
import { CUSTOMERS_LIST, PRODUCTS_LIST } from "@/constans";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import { NewOrderBody } from "@/interfaces";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const defaultStatus = "Pending";
export default function NewOrder() {
  const [selectedProducts, setSelectedProducts] = useState([PRODUCTS_LIST[0]]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { customerID } = data;
    const selectedProductIDs = selectedProducts.map((product) => product.id);
    const totalPrice = selectedProducts.reduce((acc, current) => {
      return acc + current.price;
    }, 0);

    const newOrder: NewOrderBody = {
      customerID,
      total: totalPrice,
      productsID: selectedProductIDs,
      status: defaultStatus,
    };

    useCreateOrder(newOrder);
  };

  return (
    <div className="flex flex-col h-screen gap-5 p-12 bg-slate-100">
      <p>New order</p>
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

        <div>
          <label htmlFor="productsID">Products</label>
          <Listbox
            value={selectedProducts}
            onChange={setSelectedProducts}
            multiple
          >
            <Listbox.Button>
              {selectedProducts.length
                ? selectedProducts.map((person) => person.name).join(", ")
                : "Ver"}
            </Listbox.Button>
            <Listbox.Options>
              {PRODUCTS_LIST.map((product) => (
                <Listbox.Option key={product.id} value={product}>
                  {product.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>

        <button>Create Product</button>
      </form>
    </div>
  );
}
