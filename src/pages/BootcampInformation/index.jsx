/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Text, RightBar, LeftBar } from './styles';
import Button from '../../components/Button';
import { api } from '../../services/api';

export default function BootcampInformation({ match }) {
  const { id } = match.params;
  const [bootcamp, setBootcamp] = useState({});

  const handleClick = () => api.post(`students/subscribe/${bootcamp.id}`);

  useEffect(
    () =>
      api.get(`bootcamps/list/${id}`).then((item) => setBootcamp(item.data[0])),
    []
  );

  return (
    <Container>
      <LeftBar>
        <span>Local</span>
        <p>{bootcamp.location}</p>

        <span>Duração</span>
        <p>{bootcamp.duration}</p>

        <Button text="Inscreva-se" onClick={handleClick} />
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
