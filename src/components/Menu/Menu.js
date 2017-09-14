import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../assets/logo-white-256-v1.0.png';

const Image = styled.img`
  display: block;
  height: 70px;
  width: 70px;
  padding 10px 5px;
`;

const Menu = ({ className }) =>
  <nav className={className}>
    <Image src={logo} />
  </nav>;

const StyledNav = styled(Menu)`
  position: absolute;
  z-index: 2;
`;

export default StyledNav;
