import React from "react";
import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../Features/Cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, color } = cartItem;
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmountChange = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w--24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="captalize text-sm text-neutral-content">{company}</h4>
        <p className="mt-2 text-sm flex capitalize items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: color }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24 sm:w-48">
        <div className="form-control max-w-xs">
          <label htmlFor={amount} className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            onChange={(e) => handleAmountChange(e)}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}
        >
          Remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
