import React, { useState, useEffect } from 'react';
import { Container, Text, Cards } from './styles';
import BootcampCard from '../../components/BootcampCard';
import { api } from '../../services/api';

export default function Students() {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(
    () =>
      api.get('bootcamps/students-list-bootcamps').then((item) => {
        setBootcamps(item.data);
      }),
    []
  );

  return (
    <Container>
      <Text>
        <h1>Olá aluno!</h1>
        <h2>Veja os bootcamps que você está inscrito.</h2>
      </Text>

      <Cards>
        {bootcamps.map((bootcamp) => (
          <BootcampCard bootcamp={bootcamp} buttonText="Já inscrito" />
        ))}
      </Cards>

      <div />
    </Container>
  );
}
