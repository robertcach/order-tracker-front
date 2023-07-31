import { APP_LOCAL_ENDPOINT } from "@/constans";
import { OrderBody } from "@/interfaces";

export function useCreateOrder({
  customerID,
  productsID,
  status,
  total,
}: OrderBody) {
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
