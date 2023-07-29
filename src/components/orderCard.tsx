"use client";

import { Order } from "@/interfaces";
import OrderProductCard from "./orderProductCard";
import Link from "next/link";
import { useState } from "react";

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const [viewMoreProduct, setViewMoreProduct] = useState(false);
  const isMoreThanOneProduct = order.products.length > 1;

  return (
    <article className="p-6 bg-white rounded-md">
      <div className="flex justify-between">
        <p>Order {`#${order.id.slice(0, 7)}`}...</p>
        <p>{order.total}€</p>
      </div>
      <div className="flex justify-between">
        <p>{order.status}</p>
        <Link
          href={`/orders/${order.id}`}
          className="px-2 py-1 text-white rounded-md bg-secondary"
        >
          View details
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <OrderProductCard
          product={order.products[0]}
          key={order.products[0].id}
        />

        {viewMoreProduct &&
          order.products
            .slice(1)
            .map((product) => (
              <OrderProductCard product={product} key={product.id} />
            ))}

        {isMoreThanOneProduct && (
          <button
            onClick={() => setViewMoreProduct(!viewMoreProduct)}
            className="text-left"
          >
            {viewMoreProduct
              ? "Show less products"
              : `Show more ${order.products.length - 1} items`}
          </button>
        )}
      </div>
    </article>
  );
}
