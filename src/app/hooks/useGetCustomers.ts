import { APP_LOCAL_ENDPOINT } from "@/constans";

export function useGetCustomers() {
  return fetch(`${APP_LOCAL_ENDPOINT}/customers`).then((res) => res.json());
}
