import { useGetOrders } from "@/hooks/useGetOrders";
import { Order } from "@/interfaces";

export default async function Home() {
  const orders: Order[] = await useGetOrders();

  return (
    <main className="flex flex-col items-center justify-between h-full p-24">
      {orders.map((order) => (
        <p>{order.total}</p>
      ))}
    </main>
  );
}
