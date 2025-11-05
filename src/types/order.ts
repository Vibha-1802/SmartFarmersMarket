import type { Product } from "../components/CustomerHomeScreen";

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: string;
  date: string;
  customerName?: string;
}
