import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    width: 176px;
    height: 54px;
  }
`;

const Header = () => (
  <Wrapper>
    <img src="/images/logo.png" alt="logo" />
  </Wrapper>
);

export default Header;
