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
      <ul className="flex gap-4">
        <li>
          <p>
            All{" "}
            <span className="px-3 text-xs text-white rounded-lg  bg-secondary">
              {orders.length}
            </span>
          </p>
        </li>
        <li>
          <p>
            Pending{" "}
            <span className="px-3 text-xs text-white bg-yellow-400 rounded-lg">
              {pendingOrders.length}
            </span>
          </p>
        </li>
        <li>
          <p>
            Delivered{" "}
            <span className="px-3 text-xs text-white bg-green-600 rounded-lg">
              {deliveredOrders.length}
            </span>
          </p>{" "}
        </li>
      </ul>
    </section>
  );
}
