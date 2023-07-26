import { Order } from "@/interfaces";

interface OrdersStatusProps {
  orders: Order[];
}

export default function OrdersStatus({ orders }: OrdersStatusProps) {
  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  return (
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
  );
}
