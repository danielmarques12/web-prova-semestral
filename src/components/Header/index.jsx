import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Head } from './styles';
import ButtonsGuest from './ButtonsGuest';
import ButtonsUser from './ButtonsUser';
import { isAuthenticated, getUserType } from '../../services/auth';

export default function Header() {
  const my_bootcamps =
    getUserType() === 'estudante' ? '/students' : '/coordinators';

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

        <a href="/bootcamps">
          <ul>
            <li>Bootcamps</li>
          </ul>
        </a>

        {isAuthenticated() ? (
          <a href={my_bootcamps}>
            <ul>
              <li>Meus Bootcamps</li>
            </ul>
          </a>
        ) : null}

        {getUserType() === 'coordenador' ? (
          <a href="/bootcamp-register">
            <ul>
              <li>Cadastrar um Bootcamp</li>
            </ul>
          </a>
        ) : null}

        <a href="/trabalhe-conosco">
          <ul>
            <li>Trabalhe conosco</li>
          </ul>
        </a>

        {isAuthenticated() ? <ButtonsUser /> : <ButtonsGuest />}
      </nav>
    </Head>
  );
}
