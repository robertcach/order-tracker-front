import { useGetOrders } from "@/hooks/useGetOrders";
import { Order } from "@/interfaces";

export default async function Orders() {
  const orders: Order[] = await useGetOrders();

  return (
    <>
      {orders.map((order) => (
        <>
          <p>{order.total}</p>
        </>
      ))}
    </>
  );
}
