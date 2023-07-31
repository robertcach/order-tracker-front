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
];

export const PRODUCTS_LIST = [
  { id: "64ad7aad8035a0ec50ce5441", name: "iPhone", price: 990 },
  { id: "64ad7acc8035a0ec50ce5443", name: "Tablet", price: 450 },
  { id: "64ad7aed8035a0ec50ce5445", name: "Headphones", price: 320 },
  { id: "64ad7b0b8035a0ec50ce5447", name: "Macbook", price: 1990 },
];

export const CUSTOMERS_LIST = [
  { id: "64ac2fa2053ba9a5a66a739b", name: "Robert" },
  { id: "64c1347d9c6d479fcfc43b32", name: "Laura" },
  { id: "64c134889c6d479fcfc43b34", name: "Diego" },
  { id: "64c134969c6d479fcfc43b36", name: "Andrea" },
  { id: "64c134bd9c6d479fcfc43b38", name: "Natalia" },
  { id: "64c134ca9c6d479fcfc43b3a", name: "Alberto" },
];
