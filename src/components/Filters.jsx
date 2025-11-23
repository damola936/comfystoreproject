import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const {search, company, category, shipping, order, price} = params;
  console.log(meta);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label="select category"
        name="category"
        size="select-sm"
        list={meta.categories}
        defaultValue={category}
      />
      <FormSelect
        label=" select company"
        name="company"
        size="select-sm"
        list={meta.companies}
        defaultValue={company}
      />
      <FormSelect
        label="sort by"
        name="order"
        size="select-sm"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      <FormRange label="price" name="price" size="range-sm" price={price} />
      <FormCheckBox name="shipping" label="free shipping" size="checkbox-sm" defaultValue={shipping} />
      <button type="submit" className="btn btn-primary btn-sm text-lg">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm text-lg">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
