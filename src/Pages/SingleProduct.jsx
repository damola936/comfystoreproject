import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { useState } from "react";
import { generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/Cart/CartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response?.data?.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    company,
    price,
    amount,
    color: productColor,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className=".text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:gap-x-16 lg:grid-cols-2">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 rounded-lg object-cover lg:w-full"
        />
        <div>
          <h1 className="capitalize font-bold text-3xl">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            <div className="form-control w-full max-w-xs mt-6">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
                <select
                  id="amount"
                  className="select select-secondary select-bordered select-md"
                  value={amount}
                  onChange={handleAmount}
                >
                  {generateAmountOptions(5)}
                </select>
              </label>
            </div>
            <div className="mt-10">
              <button className="btn btn-secondary btn-md" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
