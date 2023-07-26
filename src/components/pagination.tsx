"use client";

interface PaginationProps {
  totalOrders: number;
}

export default function Pagination({ totalOrders }: PaginationProps) {
  const totalPages = Math.ceil(totalOrders / 10);
  const pagesList = Array.from(Array(totalPages), (_, index) => index + 1);

  return (
    <div className="flex gap-4">
      {pagesList.map((page) => (
        <button
          key={page}
          onClick={() => console.log(page)}
          className="w-4 h-auto bg-secondary"
        >
          {page}
        </button>
      ))}
    </div>
  );
}
