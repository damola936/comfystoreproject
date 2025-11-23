import React from "react";

const FormInput = ({ name, type, defaultValue, size, width = null }) => {
  return (
    <fieldset className="fieldset">
      <label htmlFor={name} className="label">
        {name}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={name}
        name={name}
        className={`input input-bordered text-lg ${width} ${size}`}
      />
    </fieldset>
  );
};

export default FormInput;
