import { useGetCustomers } from "@/hooks/useGetCustomers";
import { Customer } from "@/interfaces";
import Link from "next/link";

export default async function Customers() {
  const customers: Customer[] = await useGetCustomers();

  return (
    <>
      {customers.map((customer) => (
        <Link key={customer.id} href={`/customers/${customer.id}`}>
          {customer.name}
        </Link>
      ))}
    </>
  );
}
