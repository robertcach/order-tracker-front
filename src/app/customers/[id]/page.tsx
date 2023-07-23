"use client";

import { APP_LOCAL_ENDPOINT } from "@/constans";
import { Customer } from "@/interfaces";
import { useEffect, useState } from "react";

export default function Customer({ params }: any) {
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`${APP_LOCAL_ENDPOINT}/customer/${id}`)
        .then((res) => res.json())
        .then((response) => setCustomer(response));
    }
  }, [id]);

  return (
    <>
      {customer?.orders.map((order) => (
        <p>{order}</p>
      ))}
    </>
  );
}
