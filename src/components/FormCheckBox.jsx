import React from "react";

const FormCheckBox = ({ label, name, size, defaultValue }) => {
  return (
    <div className="form-control flex flex-col items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <input
          type="checkbox"
          name={name}
          className={`checkbox checkbox-primary ${size}`}
          defaultChecked={defaultValue}
        />
      </label>
    </div>
  );
};

export default FormCheckBox;
