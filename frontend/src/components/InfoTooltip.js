export default function InfoTooltip({ title, isOpen, onClose, withError }) {
  const openedStyle = isOpen === true ? 'popup_opened' : '';
  const imgStyle = withError ? 'error' : 'success';
  return (
    <div className={`popup popup_type_error ${openedStyle}`}>
      <div className="popup__container popup__container_type_form">
        <button
          className="button popup__close-button popup__close-button_type_form"
          onClick={onClose}
        />
        <div className="popup__tooltip">
          <div className={`popup__tooltip-image popup__tooltip-image_type_${imgStyle}`} />
          <h3 className="popup__tooltip-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}
