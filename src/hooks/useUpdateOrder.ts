import { APP_LOCAL_ENDPOINT } from "@/constans";
import { OrderBody } from "@/interfaces";

export function useUpdateOrder(data: OrderBody, orderId: string) {
  const opcionesFetch = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerID: data.customerID,
      status: data.status,
      productsID: data.productsID,
      total: data.total,
    }),
  };

  return fetch(`${APP_LOCAL_ENDPOINT}/order/${orderId}`, opcionesFetch);
}
