"use client";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const products = [
  { id: "64ad7aad8035a0ec50ce5441", name: "iPhone" },
  { id: "64ad7acc8035a0ec50ce5443", name: "Tablet" },
  { id: "64ad7aed8035a0ec50ce5445", name: "Headphones" },
  { id: "64ad7b0b8035a0ec50ce5447", name: "Macbook" },
];

export default function NewOrder() {
  const [selectedProducts, setSelectedProducts] = useState([products[0]]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const bodyFormData = new FormData();
    const { customerID } = data;
    const selectedProductIDs = selectedProducts.map((product) => product.id);

    bodyFormData.append("customerID", customerID);
    bodyFormData.append("productsID", JSON.stringify(selectedProductIDs));

    console.log(bodyFormData.get("customerID"));
    console.log(bodyFormData.get("productsID"));
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
          <input
            type="text"
            id="customerID"
            {...register("customerID")}
          ></input>
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
