import { useGetCustomers } from "@/hooks/useGetCustomers";
import { Customer } from "@/interfaces";
import Link from "next/link";

export default async function Customers() {
  const customers: Customer[] = await useGetCustomers();

  return (
    <div className="flex flex-col h-screen gap-5 p-24 bg-slate-100">
      <div className="grid gap-5 p-6 bg-white rounded-md">
        {customers.map((customer) => (
          <Link key={customer.id} href={`/customers/${customer.id}`}>
            {customer.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
