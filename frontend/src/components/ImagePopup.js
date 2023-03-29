export default function ImagePopup({ card, onClose }) {
  console.log();

  const openedStyle = Object.values(card).length > 0 ? 'popup_opened' : '';
  return (
    <div className={`popup popup_type_view ${openedStyle}`}>
      <div className="popup__container popup__container_type_view">
        <button
          className="button popup__close-button popup__close-button_type_view"
          onClick={onClose}
        />
        <img src={card.link} alt={card.name} className="popup__view-image" />
        <p className="popup__view-name">{card.name}</p>
      </div>
    </div>
  );
}
