import { APP_LOCAL_ENDPOINT } from "@/constans";

export function useGetOrder(id: string) {
  return fetch(`${APP_LOCAL_ENDPOINT}/order/${id}`).then((res) => res.json())

}