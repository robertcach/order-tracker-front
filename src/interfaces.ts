export interface Product {
  title: string;
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
  customerID: string;
  customerData: Customer[];
  products: string[];
  productsData: Product[];
  total: number;
  status: string;
}

export interface NavLink {
  label: string;
  route: string;
}
