import OrdersStatus from "@/components/ordersStatus";
import OrdersTable from "@/components/ordersTable";
import Pagination from "@/components/pagination";
import { useGetOrders } from "@/hooks/useGetOrders";
import { Order } from "@/interfaces";

export default async function Home() {
  const orders: Order[] = await useGetOrders();

  return (
    <main className="flex flex-col items-center h-full gap-5 p-24 bg-slate-100">
      <OrdersStatus orders={orders} />
      <Pagination orders={orders} />
      <OrdersTable />
    </main>
  );
}
