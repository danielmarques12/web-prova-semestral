import React, { useState } from 'react';
import { Container, Content, Form, Input } from './styles';
import Button from '../../components/Button';
import { api } from '../../services/api';

export default function WorkWithUs() {
  const [contactInfo, setContactInfo] = useState({});

  const handleSubmit = () => api.post('contact', contactInfo);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Trabalhe conosco</h1>
          <Input
            value={contactInfo.name}
            onChange={(event) =>
              setContactInfo({ ...contactInfo, name: event.target.value })
            }
            placeholder="Nome"
            type="text"
          />

          <Input
            value={contactInfo.email}
            onChange={(event) =>
              setContactInfo({ ...contactInfo, email: event.target.value })
            }
            placeholder="Email"
            type="email"
          />

          <Input
            value={contactInfo.linkedin}
            onChange={(event) =>
              setContactInfo({ ...contactInfo, linkedin: event.target.value })
            }
            placeholder="Linkedin"
            type="text"
          />
          <Button text="Enviar" />
        </Form>
        <img src="https://bit.ly/3w76aSY" alt="WorkWithUs illustration" />
      </Content>
    </Container>
  );
}
