import OrderDetails from "@/components/orderDetails";
import { useGetOrder } from "@/hooks/useGetOrder";
import { Order } from "@/interfaces";

export default async function Order({ params }: any) {
  const { id } = params;
  const order: Order = await useGetOrder(id);

  return <OrderDetails order={order} key={order.id} />;
}
