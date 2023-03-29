import React from 'react';

export default function Form({
  children,
  title,
  submitTitle,
  onSubmit,
  name,
  buttonToolTip = null,
  buttonStyle = '',
  titleStyle = '',
  formStyle = '',
}) {
  return (
    <form className={`form ${formStyle}`} name={`${name}-form`} onSubmit={onSubmit}>
      <h2 className={`form__title ${titleStyle}`}>{title}</h2>
      {children}
      <button type="submit" className={`button form__submit-button ${buttonStyle}`}>
        {submitTitle}
      </button>
      <p className="form__button-helper">{buttonToolTip}</p>
    </form>
  );
}
