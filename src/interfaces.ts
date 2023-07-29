export interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  address: string;
  orders: Order[];
}

export interface Order {
  id: string;
  name: string;
  customer: string | Customer;
  products: Product[];
  total: number;
  status: string;
}

export interface NavLink {
  label: string;
  route: string;
}
