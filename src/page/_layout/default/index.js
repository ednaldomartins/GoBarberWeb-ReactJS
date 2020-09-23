import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../component/header';
import { Wrapper } from './style';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
