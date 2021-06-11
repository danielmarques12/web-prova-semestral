import React, { useState } from 'react';
import { Container, Form, Input, SubmitInput, TextArea } from './styles';
import { api } from '../../services/api';

export default function RegisterBootcamp() {
  const [bootcamp, setBootcamp] = useState({});
  const [file, setFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .post('bootcamps/create', bootcamp)
      .then((item) => api.post(`files/upload/${item.data[0].id}`, file));
  };

  const handleFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    setFile(data);
  };

  return (
    <Container>
      <h1>Cadastrar um Bootcamp</h1>

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Input
          value={bootcamp.name}
          onChange={(event) =>
            setBootcamp({ ...bootcamp, name: event.target.value })
          }
          name="nome"
          placeholder="Nome do Bootcamp"
          type="text"
        />

        <Input
          value={bootcamp.location}
          onChange={(event) =>
            setBootcamp({ ...bootcamp, location: event.target.value })
          }
          placeholder="Local (Cidade - UF)"
          type="text"
        />

        <Input
          value={bootcamp.duration}
          onChange={(event) =>
            setBootcamp({ ...bootcamp, duration: event.target.value })
          }
          placeholder="Duração"
          type="text"
        />

        <TextArea
          value={bootcamp.description}
          onChange={(event) =>
            setBootcamp({ ...bootcamp, description: event.target.value })
          }
          placeholder="Descrição do Bootcamp"
        />

        <Input type="file" onChange={handleFile} />

        <SubmitInput type="submit" value="Cadastrar Bootcamp" />
      </Form>
    </Container>
  );
}
