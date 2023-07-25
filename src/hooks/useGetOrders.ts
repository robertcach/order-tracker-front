import { APP_LOCAL_ENDPOINT } from "@/constans";

export function useGetOrders() {
  return fetch(`${APP_LOCAL_ENDPOINT}/orders`).then((res) => res.json());
}
