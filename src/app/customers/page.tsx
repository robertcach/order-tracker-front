import { useGetCustomers } from "@/hooks/useGetCustomers";
import { Customer } from "@/interfaces";

export default async function Customers() {
  const customers: Customer[] = await useGetCustomers();

  return <>{customers.map((customer) => customer.name)}</>;
}
