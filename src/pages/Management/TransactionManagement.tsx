import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const orderItems: OrderItemType[] = [
  {
    name: "Puma shoes",
    photo: img,
    _id: "snfinfis",
    quantity: 2,
    price: 2121,
  },
];
function TransactionManagement() {
  const [order, setOrder] = useState<OrderType>({
    name: "luv sharma",
    address: "77 black street",
    city: "New York",
    state: "Nevada",
    country: "india",
    pinCode: 2313131,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    quantity: 12,
    _id: "2j9d2jd9",
  });
  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((Prev) => ({
      ...Prev,
      status: Prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>
          {order.orderItems.map((item) => (
            <ProductCard
              name={item.name}
              photo={item.photo}
              _id={item._id}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </section>

        <article className="shippingInfoCard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>ShippingCharges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
}
const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <div className="transactionProductCard">
      <img src={photo} alt={name} />
      <Link to={`/products/${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
};
export default TransactionManagement;
