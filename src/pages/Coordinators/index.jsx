import React, { useState, useEffect } from 'react';
import { Container, Text, Cards } from './styles';
import BootcampCard from '../../components/BootcampCard';
import { api } from '../../services/api';

export default function Coordinators() {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(
    () =>
      api.get('bootcamps/coordinator-list-bootcamps').then((item) => {
        setBootcamps(item.data);
      }),
    []
  );

  return (
    <Container>
      <Text>
        <h1>Olá coordenador!</h1>
        <h2>Gerenciamento de Bootcamps e alunos</h2>
      </Text>

      <Cards>
        {bootcamps.map((bootcamp) => (
          <BootcampCard
            bootcamp={bootcamp}
            buttonText="Gerenciar alunos"
            redirect={`/manage-students/${bootcamp.id}`}
          />
        ))}
      </Cards>

      <div />
    </Container>
  );
}
