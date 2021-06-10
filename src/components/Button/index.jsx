/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css';

export default function Home(props) {
  const { text, redirect, onClick } = props;

  return (
    <>
      <Link to={redirect}>
        <button type="submit" onClick={onClick}>
          {text}
        </button>
      </Link>
    </>
  );
}
