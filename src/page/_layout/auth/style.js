import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #ff8a65, #c75b39);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 256px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 32px;
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

    button {
      margin: 8px 0 0;
      height: 32px;
      background: #00e5ff;
      color: #000;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      transition: background 0.25s;

      &:hover {
        background: #00b2cc;
      }
    }

    a {
      color: #000;
      margin-top: 16px;
      opacity: 0.75;

      &:hover {
        opacity: 1;
      }
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
