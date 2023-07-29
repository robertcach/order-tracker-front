import { useGetCustomer } from "@/hooks/useGetCustomer";
import { useGetOrders } from "@/hooks/useGetOrders";
import { Customer, Order } from "@/interfaces";
import Link from "next/link";

export default async function OrdersTable() {
  const orders: Order[] = await useGetOrders();

  return (
    <table className="w-full p-10 text-left bg-white border-collapse rounded-sm table-auto">
      <thead className="bg-secondary">
        <tr>
          <th className="px-10 py-6">OrdeID</th>
          <th className="px-10 py-6">Status</th>
          <th className="px-10 py-6">Customer</th>
          <th className="px-10 py-6">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => {
          return (
            <tr className="border-b border-b-gray">
              <td className="px-10 py-6">{order.id.slice(0, 5)}...</td>
              <td className="px-10 py-6">{order.status}</td>
              <td className="px-10 py-6">{order.customer[0].name}</td>
              <td className="px-10 py-6">
                <Link href={`/orders/${order.id}`}>Edit</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
