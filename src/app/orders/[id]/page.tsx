import OrderCard from "@/components/orderCard";
import { useGetOrder } from "@/hooks/useGetOrder";
import { Order } from "@/interfaces";

export default async function Order({ params }: any) {
  const { id } = params;
  const order: Order = await useGetOrder(id);

  return <OrderCard order={order} key={order.id} />;
}
