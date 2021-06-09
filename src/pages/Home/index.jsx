import React from 'react';
import { Container, Content, About } from './styles';
import Button from '../../components/Button';

export default function Home() {
  return (
    <Container>
      <Content>
        <About>
          <h1>Bootcamps PS13SI</h1>
          <p>
            Através de bootcamps intensivos, nossa plataforma ensina as
            habilidades e a mentalidade empreendedora que você precisa para
            prosperar agora e no futuro.
          </p>
          <Button text="Começe agora" />
        </About>
        <img src="https://bit.ly/3pCWPjo" alt="Home illustration" />
      </Content>
    </Container>
  );
}
