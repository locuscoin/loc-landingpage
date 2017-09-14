import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ className, children }) =>
  <h1 className={className}>
    {children}
  </h1>;

const StyledTitle = styled(Title)`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-size: ${({ size }) => (size === 'huge' ? '30px' : '20px')};
  line-height: 1.3;
  font-weight: 100;
  letter-spacing: .1em;
  text-align: center;
  
  @media only screen and (min-width: 400px) {
    font-size: ${({ size }) => (size === 'huge' ? '40px' : '20px')};
  }
`;

export default StyledTitle;
