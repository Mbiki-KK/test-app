import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton';

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LetterContent = styled.div`
  width: 420px;
  padding: 48px;
  border: 2px solid #0b2f5a;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 16px 30px rgba(11, 47, 90, 0.12);
  position: relative;
`;

const CornerHeart = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: #0b2f5a;
  transform: rotate(-45deg);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: #0b2f5a;
    border-radius: 50%;
  }

  &::before {
    top: -12px;
    left: 0;
  }

  &::after {
    top: 0;
    left: 12px;
  }
`;

const TopLeftHeart = styled(CornerHeart)`
  top: 16px;
  left: 16px;
`;

const BottomRightHeart = styled(CornerHeart)`
  bottom: 16px;
  right: 16px;
`;

const LetterBody = styled.div`
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: transparent;
`;

const Letter = ({ onBack }) => {
  return (
    <LetterContainer>
      <LetterContent>
        <TopLeftHeart />
        <BottomRightHeart />
        <LetterBody>
          <p> </p>
        </LetterBody>
      </LetterContent>

      <BackButton onClick={onBack} />
    </LetterContainer>
  )
}

export default Letter
