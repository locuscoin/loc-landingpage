import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hero = ({ children, className }) =>
  <section className={className}>
    {children}
  </section>;

const StyledHero = styled(Hero)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: 
    linear-gradient(
      141deg,
      ${({ gradientTopLeft }) => gradientTopLeft} 0%,
      ${({ backgroundColor }) => backgroundColor} 70%,
      ${({ gradientBottomRight }) => gradientBottomRight} 100%
    );
  color: ${({ textColor }) => textColor};
  padding: 9rem 2rem;
  align-items: center;
`;

export default StyledHero;
