import React, { useState, useEffect } from 'react';
import { Container, Text } from './styles';
import Button from '../Button';

export default function BootcampCard() {
  return (
    <Container>
      <img src="https://bit.ly/2SlTqZX" alt="Bootcamp" />

      <Text>
        <h3>Imersão React</h3>
        <p>
          Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node
          Vários exercícios práticos e Duas Apps do ZERO!
        </p>
      </Text>

      <div className="button">
        <Button text="Inscreva-se" redirect="/" />
      </div>
    </Container>
  );
}
