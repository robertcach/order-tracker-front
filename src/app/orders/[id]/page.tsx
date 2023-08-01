import OrderDetails from "@/components/orderDetails";
import { useGetOrder } from "@/hooks/useGetOrder";
import { Order } from "@/interfaces";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function Order({ params }: { params: { id: string } }) {
  const { id } = params;
  const order: Order = await useGetOrder(id);

  return (
    <div className="flex flex-col h-screen gap-5 p-24 bg-slate-100">
      <div className="flex justify-between w-full">
        <p className="text-2xl font-bold uppercase">Order details</p>
        <Link
          href={`/orders/${order.id}/edit`}
          className="flex items-center w-auto gap-2 px-2 py-1 text-lg text-white rounded-md bg-primary"
        >
          <PlusCircleIcon className="w-6 h-6 " aria-hidden="true" /> Edit order
        </Link>
      </div>
      <OrderDetails order={order} key={order.id} />
    </div>
  );
}
