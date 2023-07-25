import { useGetOrders } from "@/hooks/useGetOrders";
import { Order } from "@/interfaces";

export default async function Home() {
  const orders: Order[] = await useGetOrders();

  return (
    <main className="flex flex-col items-center justify-between h-full p-24 bg-slate-100">
      <table className="w-full p-10 text-left bg-white border-collapse rounded-sm table-auto">
        <thead className="bg-secondary">
          <tr>
            <th className="px-10 py-6">Status</th>
            <th className="px-10 py-6">Customer</th>
            <th className="px-10 py-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="border-b border-b-gray">
              <td className="px-10 py-6">{order.status}</td>
              <td className="px-10 py-6">{order.customer}</td>
              <td className="px-10 py-6">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
