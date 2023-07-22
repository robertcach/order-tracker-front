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
  orders: string[];
}

export interface Order {
  name: string;
  customer: Customer;
  products: string[];
  total: number;
  status: string;
}
