import React, { useState, useEffect } from 'react';
import { Container, Text, Cards } from './styles';
import BootcampCard from '../../components/BootcampCard';
import { api } from '../../services/api';

export default function Bootcamps() {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(
    () =>
      api.get('bootcamps/listall').then((item) => {
        setBootcamps(item.data);
      }),
    []
  );

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
        {bootcamps.map((bootcamp) => (
          <BootcampCard
            bootcamp={bootcamp}
            buttonText="Inscreva-se"
            redirect={`/bootcamp/${bootcamp.id}`}
          />
        ))}
      </Cards>
      <div />
    </Container>
  );
}
