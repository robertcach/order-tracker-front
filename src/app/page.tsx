import OrderCard from "@/components/orderCard";
import OrdersStatus from "@/components/ordersStatus";
import { useGetOrders } from "@/hooks/useGetOrders";
import { Order } from "@/interfaces";

export default async function Home() {
  const orders: Order[] = await useGetOrders();

  return (
    <main className="flex flex-col items-center h-full gap-5 p-24 bg-slate-100">
      <OrdersStatus orders={orders} />
      <section className="flex flex-col w-full gap-4">
        {orders.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </section>
    </main>
  );
}
