import React, { useState } from 'react';
import { Container, Form, Input, SubmitInput, TextArea } from './styles';

export default function RegisterBootcamp() {
  const [bootcamp, setBootcamp] = useState({});

  return (
    <Container>
      <h1>Cadastrar um Bootcamp</h1>

      <Form onSubmit="oi" autoComplete="on">
        <Input
          value={bootcamp.nome}
          onChange={(event) =>
            setBootcamp({ ...bootcamp, nome: event.target.value })
          }
          name="nome"
          placeholder="Nome do Bootcamp"
          type="text"
        />

        <Input
          value={bootcamp.local}
          onChange={(event) =>
            setBootcamp({ ...bootcamp, local: event.target.value })
          }
          placeholder="Local (Cidade - UF)"
          type="text"
        />

        <Input
          value={bootcamp.duracao}
          onChange={(event) =>
            setBootcamp({ ...bootcamp, duracao: event.target.value })
          }
          placeholder="Duração"
          type="text"
        />

        <TextArea />

        <Input placeholder="Upload Bootcamp Image" type="text" />

        <SubmitInput type="submit" value="Cadastrar Bootcamp" />
      </Form>
    </Container>
  );
}
