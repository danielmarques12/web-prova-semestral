import React, { useState, useEffect } from 'react';
import { Container, Text, RightBar, LeftBar } from './styles';
import Button from '../../components/Button';

export default function BootcampInformation() {
  return (
    <Container>
      <LeftBar>
        <span>Professores</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <span>Local</span>
        <p>São Paulo - SP</p>

        <span>Duração</span>
        <p>6 meses</p>

        <Button text="Inscreva-se" redirect="/" />
      </LeftBar>

      <RightBar>
        <img src="https://bit.ly/2SlTqZX" alt="Bootcamp" />

        <Text>
          <h3>Imersão React</h3>
          <p>
            Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node
            Vários exercícios práticos e Duas Apps do ZERO!
          </p>
        </Text>
      </RightBar>
    </Container>
  );
}
