import styled from 'styled-components';

export const Container = styled.div`
  max-width: 512px;
  margin: 64px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    input {
      background: rgba(0, 0, 0, 0.25);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 16px;
      color: #fff;
      margin: 0 0 8px;
    }

    /* estilização do erro */
    span {
      color: #c30000;
      align-self: flex-start;
      margin: 0 16px 8px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.25);
      margin: 8px 0 16px;
    }

    button {
      margin: 8px 0 0;
      height: 40px;
      background: #00e5ff;
      color: #000;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      transition: background 0.25s;

      &:hover {
        background: #6effff;
      }
    }
  }

  /* apenas estilizar o último botão (botão de sair) */
  > button {
    width: 100%;
    margin: 8px 0 0;
    height: 40px;
    background: #ff9800;
    color: #000;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    transition: background 0.25s;

    &:hover {
      background: #ffc947;
    }
  }
`;
/*
Primary: #ff9800
Dark: #c66900
Light: #ffc947
Accent-P: #2979ff
Accent-D: #00b2cc
Accent-L: #6effff
*/
