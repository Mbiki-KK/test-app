import React from 'react'
import styled from 'styled-components'

const StyledBackButton = styled.button`
  background-color: #110e63;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px)
    scale(1.05);
    color: #08567c;
    background-color: transparent;
    border: 2px solid #08567c;
    box-shadow: 0 12px 24px rgb(255, 255, 255);
  }
`;

const BackButton = ({ onClick }) => {
  return (
    <StyledBackButton onClick={onClick}>Back</StyledBackButton>
      
  )
}

export default BackButton
