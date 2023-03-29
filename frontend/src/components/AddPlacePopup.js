import PopupInput from './PopupInput';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

export default function AddPlacePopup({ onClose, isOpen, onSubmit }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const handlePlaceAdd = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        onSubmit({ name, link });
        setName('');
        setLink('');
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };

    return (
        <PopupWithForm
            onClose={onClose}
            title="Новое место"
            name="card"
            isOpen={isOpen}
            onSubmit={handlePlaceAdd}>
            <PopupInput
                name="card"
                typeName="name"
                onChange={handleNameChange}
                value={name}
                inputStyles={{
                    placeholder: 'Название',
                    minLength: 2,
                    maxLength: 30,
                    required: true,
                }}
            />
            <PopupInput
                name="card"
                typeName="about"
                onChange={handleLinkChange}
                value={link}
                inputStyles={{
                    placeholder: 'Ссылка на картинку',
                    required: true,
                }}
            />
        </PopupWithForm>
    );
}
