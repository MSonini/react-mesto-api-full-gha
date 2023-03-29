import React from 'react';

export default function Input({ name, typeName, inputRef, onChange, value, inputStyles }) {
  return (
    <label className={`input`}>
      <input
        ref={inputRef || null}
        type="text"
        className="input__field"
        id={`${name}-${typeName}`}
        name="name"
        onChange={onChange}
        value={value}
        {...inputStyles}
      />
      <span className={`input__error`} id={`${name}-${typeName}-error`}></span>
    </label>
  );
}
