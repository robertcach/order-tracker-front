import { APP_LOCAL_ENDPOINT } from "@/constans";

export function useGetCustomer(id: string) {
  return fetch(`${APP_LOCAL_ENDPOINT}/customer/${id}`).then((res) =>
    res.json()
  );
}
