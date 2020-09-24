import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 32px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }

    img {
      height: 128px;
      width: 128px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.25);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
