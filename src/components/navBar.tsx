import { NAV_LINKS } from "@/constans";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="col-span-2">
      <ul className="flex flex-col">
        {NAV_LINKS.map((link) => (
          <Link href={link.route}>{link.label}</Link>
        ))}
      </ul>
    </nav>
  );
}
