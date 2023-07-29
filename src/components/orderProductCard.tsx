import { Product } from "@/interfaces";
import Image from "next/image";

interface OrderProductCardProps {
  product: Product;
  showPrice?: boolean;
}

export default function OrderProductCard({
  product,
  showPrice,
}: OrderProductCardProps) {
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
      {showPrice && <p className="ml-auto">{product.price}€</p>}
    </div>
  );
}
