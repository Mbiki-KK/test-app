import React from 'react'
import styles from 'styled-components'

// Define the header component using a functional component

const StyledHeader = styles.header`
  background-color: #25187c;
  color: white;
  padding: 20px;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledHeading = styles.h2`
  margin: 0;
  font-family: 'Aptos', 'Segoe UI', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeading>HI CATRINA MY LOVE</StyledHeading>
    </StyledHeader>
  )
}

export default Header
