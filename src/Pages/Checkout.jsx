import React from "react";
import { redirect } from "react-router-dom";
import { CheckoutForm, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const loader = (store) => () => {
  const user = store.getState().user.user;
  if (!user) {
    toast.warning("Please login to place an order");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  if (cartItems.length === 0) return <SectionTitle text="Your cart is empty" />;
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
