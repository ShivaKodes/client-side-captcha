import React from "react";

export default function Input({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  label,
  minLength,
}) {
  return (
    <>
      <label htmlFor={id} className="label__field">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="input__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        minLength={+minLength}
      />
    </>
  );
}
