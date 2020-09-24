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
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    margin-top: 32px;
  }
`;

export const Time = styled.li`
  padding: 16px;
  border-radius: 4px;
  background: #fff;
  opacity: ${(props) => (props.past ? 0.75 : 1)};

  strong {
    display: black;
    font-size: 22px;
    font-weight: normal;
    color: ${(props) => (props.available ? '#555' : '#00b2cc')};
  }

  span {
    display: block;
    margin-top: 4px;
    color: ${(props) => (props.available ? '#555' : '#00b2cc')};
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
