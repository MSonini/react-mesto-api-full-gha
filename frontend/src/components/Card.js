import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function Card({ card, onCardLike, onCardClick, onCardDelete, ...props }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwner = card.owner._id === currentUser._id;
    const isLiked = card.likes.some((e) => e._id === currentUser._id);
    const handleCardLike = () => {
        onCardLike(card);
    };
    const handleCardDelete = () => {
        onCardDelete(card);
    };
    const handleImageClick = () => {
        onCardClick(card);
    };
    return (
        <div className="card">
            <button className="card__image-button" onClick={handleImageClick}>
                <img className="card__image" src={card.link} alt={card.name} />
            </button>
            {isOwner && (
                <button className="button card__delete-button" onClick={handleCardDelete} />
            )}
            <div className="card__info">
                <h3 className="card__title">{card.name}</h3>
                <div className="card__like-container">
                    <button
                        className={`button card__like-button ${
                            isLiked && 'card__like-button_active'
                        }`}
                        onClick={handleCardLike}
                    />
                    <p className="card__like-amount">{card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}
