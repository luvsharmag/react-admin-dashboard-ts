
export type OrderItemType = {
  _id: string;
  name: string;
  photo: string;
  price: number;
  quantity: number;
};
export type OrderType = {
  name: string;
  address: string;
  city: string;
  state:string;
  country: string;
  pinCode: number;
  quantity: number;
  status: "Processing" | "Shipped" | "Delivered";
  subtotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItemType[];
  _id: string;
};
