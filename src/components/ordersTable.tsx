import { useGetCustomer } from "@/hooks/useGetCustomer";
import { useGetOrders } from "@/hooks/useGetOrders";
import { Customer, Order } from "@/interfaces";
import Link from "next/link";

const getOrdersNames = async () => {
  const orders: Order[] = await useGetOrders();

  const ordersResult = await Promise.all(
    orders.map(async (order) => {
      const customerData: Customer = await useGetCustomer(
        order.customer as string
      );

      return {
        ...order,
        customer: customerData,
      };
    })
  );

  return ordersResult;
};

export default async function OrdersTable() {
  const ordersResult = await getOrdersNames();

  return (
    <table className="w-full p-10 text-left bg-white border-collapse rounded-sm table-auto">
      <thead className="bg-secondary">
        <tr>
          <th className="px-10 py-6">Status</th>
          <th className="px-10 py-6">Customer</th>
          <th className="px-10 py-6">Action</th>
        </tr>
      </thead>
      <tbody>
        {ordersResult.map((order) => {
          return (
            <tr className="border-b border-b-gray">
              <td className="px-10 py-6">{order.status}</td>
              <td className="px-10 py-6">{order.customer.name}</td>
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
