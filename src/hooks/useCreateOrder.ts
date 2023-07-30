import { APP_LOCAL_ENDPOINT } from "@/constans";

export function useCreateOrder(data: any) {
  const customerID = data.get("customerID");
  const status = data.get("status");
  const productsID = JSON.parse(data.get("productsID"));
  const total = data.get("total");

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
