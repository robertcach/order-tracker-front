"use client";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const products = [
  { id: "64ad7aad8035a0ec50ce5441", name: "iPhone", price: 990 },
  { id: "64ad7acc8035a0ec50ce5443", name: "Tablet", price: 450 },
  { id: "64ad7aed8035a0ec50ce5445", name: "Headphones", price: 320 },
  { id: "64ad7b0b8035a0ec50ce5447", name: "Macbook", price: 1990 },
];

const customers = [
  { id: "64ac2fa2053ba9a5a66a739b", name: "Robert" },
  { id: "64c1347d9c6d479fcfc43b32", name: "Laura" },
  { id: "64c134889c6d479fcfc43b34", name: "Diego" },
  { id: "64c134969c6d479fcfc43b36", name: "Andrea" },
  { id: "64c134bd9c6d479fcfc43b38", name: "Natalia" },
  { id: "64c134ca9c6d479fcfc43b3a", name: "Alberto" },
];
const defaultStatus = "Pending";

export default function NewOrder() {
  const [selectedProducts, setSelectedProducts] = useState([products[0]]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const bodyFormData = new FormData();
    const { customerID } = data;

    const selectedProductIDs = selectedProducts.map((product) => product.id);
    const totalPrice = selectedProducts.reduce((acc, current) => {
      return acc + current.price;
    }, 0);

    bodyFormData.append("customerID", customerID);
    bodyFormData.append("productsID", JSON.stringify(selectedProductIDs));
    bodyFormData.append("status", defaultStatus);
    bodyFormData.append("total", totalPrice.toString());

    useCreateOrder(bodyFormData);
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
            {customers.map((customer) => {
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
              {products.map((product) => (
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
