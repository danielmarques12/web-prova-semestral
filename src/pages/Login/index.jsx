/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { api } from '../../services/api';
import { login, setUserType } from '../../services/auth';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Text,
  Separator,
  CreateAccountLink,
} from './styles';

export default function Login(props) {
  const [user, setUser] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('users/auth', user);
    login(response.data.token);
    setUserType(response.data.user.type);

    window.location.href = '../';
  }

  return (
    <Container>
      <Text>
        <h2>PS13SI - Bootcamps</h2>
        <h3>Oportunidade de se capacitar para atuar na área de tecnologia</h3>
      </Text>

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          name="email"
          placeholder="Email"
          type="email"
        />

        <Input
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          placeholder="Senha"
          type="password"
        />

        <SubmitInput type="submit" value="Login" />

        <Separator />

        <CreateAccountLink>
          <a href="/signup"> Criar uma conta </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
