import styled from 'styled-components';

export const Container = styled.div`
  max-width: 720px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 16px;
      margin-bottom: 4px;
    }
  }
`;
