import { useGetOrders } from "@/hooks/useGetOrders";
import { Order } from "@/interfaces";

export default async function Home() {
  const orders: Order[] = await useGetOrders();

  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  return (
    <main className="flex flex-col items-center h-full gap-5 p-24 bg-slate-100">
      <section className="flex items-start w-full gap-5">
        <div className="flex flex-col items-start px-6 py-4 bg-white rounded-md shadow w-60">
          <p>{orders.length}</p>
          <p>Total orders</p>
        </div>
        <div className="flex flex-col items-start px-6 py-4 bg-white rounded-sm shadow w-60">
          <p>{pendingOrders.length}</p>
          <p>Total pending orders</p>
        </div>
        <div className="flex flex-col items-start px-6 py-4 bg-white rounded-sm shadow w-60">
          <p>{deliveredOrders.length}</p>
          <p>Total delivered orders</p>
        </div>
      </section>
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
