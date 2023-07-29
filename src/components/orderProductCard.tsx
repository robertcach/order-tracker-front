import { Product } from "@/interfaces";
import Image from "next/image";

interface OrderProductCardProps {
  product: Product;
}

export default function OrderProductCard({ product }: OrderProductCardProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={product.image}
        alt={product.title}
        width="75"
        height="75"
        className="rounded-md"
      />
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
