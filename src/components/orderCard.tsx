import { Order } from "@/interfaces";
import OrderProductCard from "./orderProductCard";
import Link from "next/link";

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <article className="p-6 border border-secondary">
      <div className="flex justify-between">
        <p>Order {`#${order.id.slice(0, 7)}`}...</p>
        <p>{order.total}€</p>
      </div>
      <div className="flex justify-between">
        <p>{order.status}</p>
        <Link href={`/orders/${order.id}`}>View details</Link>
      </div>
      <div className="flex flex-col gap-4">
        {order.products.map((product) => (
          <OrderProductCard product={product} key={product.id} />
        ))}
      </div>
    </article>
  );
}
