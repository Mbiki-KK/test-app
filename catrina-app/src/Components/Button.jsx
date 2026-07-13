import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #110e63;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 30px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
  transform: translateY(-5px); scale(1.05);
  color: #08567c;
  background-color: transparent;
  border: 2px solid #08567c;
  box-shadow: 0 12px 24px rgb(255, 255, 255)};
`;

const Button = ({onDoubleclick}) => {
  return (
    <div>
      <StyledButton onDoubleClick={onDoubleclick}>Click Me!</StyledButton>

    </div>
  )
}

export default Button
