/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Text } from './styles';
import Button from '../Button';

export default function BootcampCard(props) {
  const { buttonText, redirect, bootcamp } = props;

  return (
    <Container>
      <img src={bootcamp.url} alt="Bootcamp" />

      <Text>
        <h3>{bootcamp.name}</h3>
        <p>{bootcamp.description}</p>
      </Text>

      <div className="button">
        <Button text={buttonText} redirect={redirect} />
      </div>
    </Container>
  );
}
