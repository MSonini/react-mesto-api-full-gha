export default function PopupWithForm({
  title,
  submitTitle = 'Сохранить',
  submitStyleType,
  formStyle = '',
  name,
  isOpen,
  children,
  onClose,
  onSubmit,
}) {
  const openedStyle = isOpen === true ? 'popup_opened' : '';
  const additionalButtonStyle = submitStyleType
    ? `form__submit-button_type_${submitStyleType}`
    : '';
  return (
    <div className={`popup popup_type_${name} ${openedStyle}`}>
      <div className="popup__container popup__container_type_form">
        <button
          className="button popup__close-button popup__close-button_type_form"
          onClick={onClose}
        />
        <form
          className={`form form_type_popup ${formStyle}`}
          name={`${name}-form`}
          onSubmit={onSubmit}>
          <h2 className="form__title form__title_type_popup">{title}</h2>
          {children}
          <button
            type="submit"
            className={`button form__submit-button_theme_light form__submit-button ${additionalButtonStyle}`}>
            {submitTitle}
          </button>
        </form>
      </div>
    </div>
  );
}
