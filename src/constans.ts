import { NavLink } from "./interfaces";

export const APP_LOCAL_ENDPOINT = process.env
  .NEXT_PUBLIC_LOCAL_ENDPOINT as string;

export const NAV_LINKS: NavLink[] = [
  {
    label: "Dashboard",
    route: "/",
  },
  {
    label: "Customers",
    route: "/customers",
  },
  {
    label: "Orders",
    route: "/orders",
  },
];
