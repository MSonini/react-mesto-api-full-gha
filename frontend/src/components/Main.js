import editProfileImage from '../images/buttons/edit-avatar.svg';
import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);
  console.log('cards', cards)
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}>
            <img
              src={editProfileImage}
              alt="Редактировать"
              className="profile__edit-avatar"
              onClick={onEditAvatar}
            />
          </button>
          <div className="profile__info-text">
            <div className="profile__name-container">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="button profile__edit-button" onClick={onEditProfile} />
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button className="button profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="elements">
        {cards.length? cards.map((e) => (
          <Card
            key={e._id}
            card={e}
            onCardDelete={onCardDelete}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
          />
        )): null}
      </section>
    </main>
  );
}
