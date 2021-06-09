/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { api } from '../../services/api';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Text,
  Separator,
  CreateAccountLink,
} from './styles';

export default function SignUp(props) {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    return api.post('users/create', user).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <Container>
      <Text>
        <h2>PS13SI - Bootcamps</h2>
        <h3>Oportunidade de se capacitar para atuar na área de tecnologia</h3>
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          placeholder="Nome"
          type="text"
        />

        <Input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
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

        <SubmitInput type="submit" value="Cadastrar" />

        <Separator />

        <CreateAccountLink>
          <a href="/login"> Já possui uma conta? </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
