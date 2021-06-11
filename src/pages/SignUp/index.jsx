/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { api } from '../../services/api';
import Button from '../../components/Button';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Text,
  Separator,
  Select,
  Bottom,
} from './styles';

export default function SignUp(props) {
  const [user, setUser] = useState({ type: 'estudante' });

  const handleSubmit = (event) => {
    event.preventDefault();
    return api.post('users/create', user).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <Container>
      <Text>
        <h1>PS13SI - Bootcamps</h1>
        <h2>
          Nossa plataforma te auxilia a se capacitar para atuar na área de
          tecnologia
        </h2>
      </Text>

      <Form onSubmit={handleSubmit} autoComplete="on" id="form">
        <Input
          value={user.nome}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          name="nome"
          placeholder="Nome"
          type="text"
        />

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

        <Bottom>
          <Select
            onChange={(event) => setUser({ ...user, type: event.target.value })}
          >
            <option value="estudante">Estudante</option>
            <option value="coordenador">Coordenador</option>
          </Select>

          <SubmitInput type="submit" value="Criar conta" />
        </Bottom>

        <Separator />

        <Button text="Já possui uma conta? Faça Login" redirect="/login" />
      </Form>
    </Container>
  );
}
