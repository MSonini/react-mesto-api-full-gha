import { useState } from 'react';
import Form from './Form';
import Input from './Input';

export default function Login({ onSubmit }) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
    <Form
      title="Вход"
      submitTitle="Войти"
      name="login"
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
  );
}
