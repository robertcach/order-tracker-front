import { Order } from "@/interfaces";
import OrderProductCard from "./orderProductCard";
import Link from "next/link";

interface OrderDetailsProps {
  order: Order;
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  const customer = { ...order.customer[0] };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="p-6 bg-white rounded-md">
          <div className="flex flex-col gap-4">
            {order.products.map((product) => (
              <OrderProductCard product={product} key={product.id} showPrice />
            ))}
          </div>

          <div className="flex items-end justify-end gap-5">
            <p className="text-sm">Total</p>
            <p className="text-3xl font-semibold">{order.total}€</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-md ">
        <p>Customer info</p>
        <p>{customer.name}</p>
        <p>{customer.email}</p>
        <p>{customer.address}</p>
      </div>
    </>
  );
}
