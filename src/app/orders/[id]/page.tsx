import { useGetOrder } from "@/hooks/useGetOrder";
import { Order } from "@/interfaces";

export default async function Order({ params }: any) {
  const { id } = params;
  const order: Order = await useGetOrder(id);

  return (
    <>
      <p>{order.customerData[0].name}</p>
      <p>{order.total}</p>
      {order.productsData.map((product) => (
        <p>{product.title}</p>
      ))}
    </>
  );
}
