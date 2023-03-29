import PopupWithForm from './PopupWithForm';
import PopupInput from './PopupInput';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ onClose, isOpen, onSubmit }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [about, setAbout] = useState(currentUser.about);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAboutChange = (e) => {
        setAbout(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name,
            about,
        });
    };

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser, isOpen]);

    return (
        <PopupWithForm
            onClose={onClose}
            title="Редактировать профиль"
            name="profile"
            isOpen={isOpen}
            onSubmit={handleSubmit}>
            <PopupInput
                name="profile"
                typeName="name"
                onChange={handleNameChange}
                value={name || ''}
                inputStyles={{
                    placeholder: 'Имя',
                    minLength: 2,
                    maxLength: 40,
                    required: true,
                }}
            />
            <PopupInput
                name="profile"
                typeName="about"
                onChange={handleAboutChange}
                value={about || ''}
                inputStyles={{
                    placeholder: 'Описание',
                    minLength: 2,
                    maxLength: 200,
                    required: true,
                }}
            />
        </PopupWithForm>
    );
}
