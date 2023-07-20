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
  order: Order[];
}

export interface Order {
  name: string;
  customer: Customer;
  products: Product[];
  total: number;
  status: string;
}
