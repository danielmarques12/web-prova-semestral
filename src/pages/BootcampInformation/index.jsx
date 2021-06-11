/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Text, RightBar, LeftBar } from './styles';
import Button from '../../components/Button';
import { api } from '../../services/api';

export default function BootcampInformation({ match }) {
  const { id } = match.params;
  const [bootcamp, setBootcamp] = useState({});
  const [subscribed, setSubscribed] = useState(Boolean);

  const handleClick = () => {
    api.post(`students/subscribe/${bootcamp.id}`);
    document.location.reload(true);
  };

  useEffect(
    () =>
      api.get(`bootcamps/list/${id}`).then((response) => {
        setBootcamp(response.data[0]);
        api
          .get(`students/check-if-subscribed/${response.data[0].id}`)
          .then((item) => setSubscribed(item.data));
      }),
    []
  );

  return (
    <Container>
      <LeftBar>
        <span>Local</span>
        <p>{bootcamp.location}</p>

        <span>Duração</span>
        <p>{bootcamp.duration}</p>

        <Button
          text={subscribed ? 'Já inscrito' : 'Inscreva-se'}
          onClick={subscribed ? null : handleClick}
        />
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
