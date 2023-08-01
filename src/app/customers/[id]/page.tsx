import { useGetCustomer } from "@/hooks/useGetCustomer";
import { Customer } from "@/interfaces";

export default async function Customer({ params }: { params: { id: string } }) {
  const { id } = params;
  const customer: Customer = await useGetCustomer(id);

  return (
    <div className="flex flex-col h-screen gap-5 p-24 bg-slate-100">
      <div className="grid gap-5 p-6 bg-white rounded-md">
        <p>{customer.name}</p>
        {customer?.orders.map((order) => (
          <p>{order.total}</p>
        ))}
      </div>
    </div>
  );
}
