import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Digite aqui seu nome" />
        <input type="email" placeholder="Digite aqui seu e-mail" />
        <input type="password" placeholder="Digite aqui sua senha" />
        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </>
  );
}
