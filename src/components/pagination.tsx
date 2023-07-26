"use client";
import { Order } from "@/interfaces";
import OrdersTable from "./ordersTable";
import { useState } from "react";

interface PaginationProps {
  orders: Order[];
}

export default function Pagination({ orders }: PaginationProps) {
  const totalPages = Math.ceil(orders.length / 10);
  const pagesList = Array.from(Array(totalPages), (_, index) => index + 1);

  return (
    <>
      <div className="flex gap-4">
        {pagesList.map((page) => (
          <button
            key={page}
            onClick={() => {}}
            className="w-4 h-auto bg-secondary"
          >
            {page}
          </button>
        ))}
      </div>

      <OrdersTable />
    </>
  );
}
