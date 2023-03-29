export default function PopupInput({
  name,
  typeName,
  onChange,
  value,
  inputStyles,
  inputRef,
  ...props
}) {
  return (
    <label className={`input input_type_${typeName} input_theme_light`}>
      <input
        ref={inputRef || null}
        type="text"
        className="input__field input__field_theme_light"
        id={`${name}-${typeName}`}
        name="name"
        onChange={onChange}
        value={value}
        {...inputStyles}
      />
      <span
        className={`input__error input__error_theme_light input__error_type_${typeName}`}
        id={`${name}-${typeName}-error`}></span>
    </label>
  );
}
