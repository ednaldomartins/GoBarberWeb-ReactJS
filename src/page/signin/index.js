import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Digite aqui seu e-mail" />
        <input type="password" placeholder="Digite aqui sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar uma conta</Link>
      </form>
    </>
  );
}
