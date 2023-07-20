import { useGetOrders } from "@/hooks/useGetOrders";

export default async function Home() {
  const orders = await useGetOrders();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {orders.map((order: any) => (
        <p>{order.total}</p>
      ))}
    </main>
  );
}
