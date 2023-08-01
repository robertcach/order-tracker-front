import { useGetCustomer } from "@/hooks/useGetCustomer";
import { Customer } from "@/interfaces";

export default async function Customer({ params }: { params: { id: string } }) {
  const { id } = params;
  const customer: Customer = await useGetCustomer(id);

  return (
    <>
      <p>{customer.name}</p>
      {customer?.orders.map((order) => (
        <p>{order.total}</p>
      ))}
    </>
  );
}
