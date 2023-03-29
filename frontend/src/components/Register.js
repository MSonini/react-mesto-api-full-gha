import React, { useState } from 'react';
import Form from './Form';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../utils/constants';

export default function Register({ onSubmit }) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();

  return (
    <>
      <Form
        title="Регистрация"
        submitTitle="Зарегистрироваться"
        name="register"
        buttonToolTip={
          <>
            Уже зарегистрированы?{' '}
            <button
              type="button"
              className="button form__helper-link"
              onClick={() => navigate(PAGES.login)}>
              Войти
            </button>
          </>
        }
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(email, password);
        }}>
        <Input
          name={'email'}
          typeName={'email'}
          inputStyles={{ placeholder: 'Email', required: true, maxLength: '100', minLength: '4' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name={'password'}
          typeName={'password'}
          inputStyles={{
            placeholder: 'Пароль',
            required: true,
            maxLength: '100',
            minLength: '4',
            type: 'password',
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
    </>
  );
}
