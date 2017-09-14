import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../assets/logo-white-256-v1.0.png';

const Figure = styled.figure`
  display: inline-block;
  padding: 0;
  margin: 0;
`;

const Image = styled.img`
  display: inline-block;
  height: 70px;
  width: 70px;
`;

const Menu = ({ className }) =>
  <nav className={className}>
    <Figure>
      <Image src={logo} />
    </Figure>
  </nav>;

const StyledNav = styled(Menu)`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  z-index: 2;
  padding 10px 5px;
`;

export default StyledNav;
