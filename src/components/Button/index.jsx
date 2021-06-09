/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css';

export default function Home(props) {
  const { text } = props;

  return (
    <>
      <Link to="/signup">
        <button type="submit">{text}</button>
      </Link>
    </>
  );
}
