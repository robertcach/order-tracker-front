"use client";

import { useGetOrder } from "@/hooks/useGetOrder";
import { Order } from "@/interfaces";
import { useEffect, useState } from "react";

export default function EditOrder({ params }: any) {
  const [order, setOrder] = useState<Order | undefined>(undefined);
  const { id } = params;

  useEffect(() => {
    useGetOrder(id).then((order) => setOrder(order));
  }, []);

  return <p>Edit order</p>;
}
