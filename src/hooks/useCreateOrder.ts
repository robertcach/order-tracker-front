import { APP_LOCAL_ENDPOINT } from "@/constans";
import { NewOrderBody } from "@/interfaces";

export function useCreateOrder({
  customerID,
  productsID,
  status,
  total,
}: NewOrderBody) {
  const opcionesFetch = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerID,
      status,
      productsID,
      total,
    }),
  };

  return fetch(`${APP_LOCAL_ENDPOINT}/order/new`, opcionesFetch);
}
