import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton';

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 24px;
  height: 100vh;
`;

const LetterContent = styled.div`
  width: 420px;
  padding: 48px;
  color: #0b2f5a;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  border: 2px solid #0b2f5a;
  border-radius: 16px;
  background: #949cf7;
  box-shadow: 0 16px 30px rgba(11, 47, 90, 0.12);
  position: relative;
`;

const CornerHeart = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: #ff00c8;
  transform: rotate(-45deg);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: #ff00c8;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0b2f5a;
`;

const CloudBorder = styled.div`
  width: 100%;
  padding: 32px 28px;
  border-radius: 28px;
  background: #e8f4ff;
  border: 2px solid rgba(11, 47, 90, 0.18);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.8);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    background: #e8f4ff;
    border-radius: 50%;
  }

  &::before {
    top: -18px;
    left: 24px;
  }

  &::after {
    bottom: -18px;
    right: 24px;
  }
`;

const LetterHeading = styled.h1`
  margin: 0 0 12px 0;
  color: #0b2f5a;
  font-size: 22px;
  line-height: 1.1;
  font-weight: 700;
  font-family: 'Aptos' system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
`;

const LetterParagraph = styled.p`
  margin: 0;
  color: #0b2f5a;
  line-height: 1.75;
  font-size: 16px;
  font-family: 'Forte', Georgia, 'Times New Roman', serif;
`;

const Letter = ({ onBack }) => {
  return (
    <LetterContainer>
      <LetterContent>
        <TopLeftHeart />
        <BottomRightHeart />
        <LetterBody>
          <CloudBorder>
            <LetterHeading>Dear Catrina,</LetterHeading>
            <LetterParagraph>
              I hope this letter finds you well. 
              I wanted to take a moment to express my gratitude for your support and love. 
              Your kindness and encouragement have meant a lot to me. 
              I love you very much.
            </LetterParagraph>
          </CloudBorder>
        </LetterBody>
      </LetterContent>

      <BackButton onClick={onBack} />
    </LetterContainer>
  )
}

export default Letter
