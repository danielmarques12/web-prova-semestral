import React, { useState, useEffect } from 'react';
import { Container, Text, Cards } from './styles';
import BootcampCard from '../../components/BootcampCard';

export default function Bootcamps() {
  return (
    <Container>
      <Text>
        <h1>Conheça nossos bootcamps</h1>
        <h2>
          Através de bootcamps intensivos, nossa plataforma ensina as
          habilidades e a mentalidade empreendedora que você precisa para
          prosperar - agora e no futuro.
        </h2>
      </Text>
      <Cards>
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
        <BootcampCard />
      </Cards>
      <div />
    </Container>
  );
}
