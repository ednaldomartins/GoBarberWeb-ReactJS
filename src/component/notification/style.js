import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff9800;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.ul`
  position: absolute;
  width: 256px;
  /* alinhamento da posição XY */
  left: calc(50% - 128px);
  top: calc(100% + 32px);
  background: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 16px 8px;

  /* triangulo */
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 24px);
    top: -24px;
    width: 0;
    height: 0;
    border-left: 24px solid transparent;
    border-right: 24px solid transparent;
    border-bottom: 24px solid rgba(0, 0, 0, 0.25);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 256px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 14px;
    line-height: 16px;
  }

  time {
    font-size: 12px;
    opacity: 0.8;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: #6effff;
    padding: 0 8px;
    margin: 0 8px;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ffc947;
        border-radius: 50%;
      }
    `}
`;
/*
Primary: #ff9800
Dark: #c66900
Light: #ffc947
Accent-P: #2979ff
Accent-D: #00b2cc
Accent-L: #6effff
*/
