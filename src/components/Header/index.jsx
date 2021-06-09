import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Head } from './styles';
import ButtonsGuest from './ButtonsGuest';
import ButtonsUser from './ButtonsUser';
import { isAuthenticated } from '../../services/auth';

export default function Header() {
  return (
    <Head>
      <img src="https://bit.ly/3uNfr0N" alt="Fiap logo" />
      <nav>
        <a
          href="https://bit.ly/3ck92np"
          alt="Link to the application github repo"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          <ul>
            <li>
              <FaGithub size={25} color="#000" />
            </li>
          </ul>
        </a>
        <a href="/">
          <ul>
            <li>Restaurants</li>
          </ul>
        </a>
        <a href="/">
          <ul>
            <li>Used Technologies</li>
          </ul>
        </a>
        <a href="/reservations">
          <ul>
            <li>My reservations</li>
          </ul>
        </a>
        {/* Make this a single component */}
        {isAuthenticated() ? <ButtonsUser /> : <ButtonsGuest />}
      </nav>
    </Head>
  );
}
