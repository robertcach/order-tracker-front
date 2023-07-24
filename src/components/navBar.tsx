import { NAV_LINKS } from "@/constans";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="h-full col-span-2 text-white bg-primary">
      <ul className="flex flex-col gap-3 p-3 ">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            className="px-2 py-1 border-2 rounded-md bg-secondary border-secondary hover:border-2 hover:border-white"
            href={link.route}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
