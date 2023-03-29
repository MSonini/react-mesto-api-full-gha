import PopupWithForm from './PopupWithForm';
import PopupInput from './PopupInput';
import { useRef } from 'react';

export default function EditAvatarPopup({ onClose, isOpen, onSubmit }) {
    const inputRef = useRef();
    const handleAvatarUpdate = (e) => {
        e.preventDefault();
        onSubmit(inputRef.current.value);
    };

    return (
        <PopupWithForm
            onClose={onClose}
            title="Обновить аватар"
            name="avatar"
            submitStyleType="avatar"
            isOpen={isOpen}
            formStyle="popup__form_type_avatar"
            onSubmit={handleAvatarUpdate}>
            <PopupInput
                inputRef={inputRef}
                name="avatar"
                typeName="name"
                inputStyles={{
                    placeholder: 'Ссылка на аватар',
                    required: true,
                }}
            />
        </PopupWithForm>
    );
}
