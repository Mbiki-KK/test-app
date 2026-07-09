import React from 'react'
import styles from 'styled-components'

// Define the header component using a functional component

const StyledHeader = styles.header`
  background-color: #25187c;
  color: white;
  font-size: 24px;
  font: sans-serif;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Header = () => {
  return (
    <StyledHeader>
      <h1>EXAMPLE TEXT</h1>
    </StyledHeader>
  )
}

export default Header
