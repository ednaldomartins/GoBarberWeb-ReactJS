import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 32px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 16px;
      padding-right: 16px;
      border-right: 1px solid #ddd;
    }

    a {
      font-weight: bold;
      color: #00b2cc;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #ddd;

  div {
    text-align: right;
    margin-right: 16px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #00b2cc;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
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
