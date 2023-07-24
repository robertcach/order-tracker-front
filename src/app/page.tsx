import { useGetOrders } from "@/hooks/useGetOrders";
import { Order } from "@/interfaces";

export default async function Home() {
  const orders: Order[] = await useGetOrders();

  return (
    <main className="flex flex-col items-center justify-between h-full p-24 bg-slate-100">
      <table className="w-full bg-white rounded-sm table-auto">
        <thead>
          <tr className="text-left ">
            <th>Status</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="text-left">
              <td>{order.status}</td>
              <td>{order.customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
