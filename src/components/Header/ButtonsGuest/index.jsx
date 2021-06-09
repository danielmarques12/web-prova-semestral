import React from 'react';
import { logout } from '../../../services/auth';

export default function ButtonsGuest() {
  return (
    <div className="buttons">
      <a href="/login">
        <button type="button">Login</button>
      </a>
      <a href="/signup">
        <button type="button">Criar uma conta</button>
      </a>
    </div>
  );
}
