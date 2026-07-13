import React from 'react'
import styled from 'styled-components'

const StyledBackButton = styled.button`
  background-color: #110e63;
  color: white;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    color: #08567c;
    background-color: transparent;
    border-color: #08567c;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
`;

const BackButton = ({ onClick }) => {
  return (
    <StyledBackButton onClick={onClick}>Back</StyledBackButton>
      
  )
}

export default BackButton
