import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Envelope = styled.div`
  width: 260px;
  height: 180px;
  position: relative;
  border: 2px solid #110e63;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 24px;
  color: #110e63;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s ease, box-shadow 0.25s ease;
  transform: ${({ opened }) => (opened ? 'rotate(-5deg) scale(1.05)' : 'rotate(0deg) scale(1)')};

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const EnvelopeLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #110e63;
  transform: translateY(-50%);
  z-index: 1;
`;

const EnvelopeFold = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 50% 50%);
  background-color: #110e63;
  border-top: 90px solid transparent;
  border-right: -90px solid transparent;
  // border-bottom: 10px solid transparent;
  // border-left: 50px solid #110e63;
  opacity: 0.18;
  inset: 0;
  pointer-events: none;
  z-index: 1;
`;

const EnvelopeText = styled.p`
  margin: 0;
  position: relative;
  z-index: 1;
`;

const Content = () => {
  return (
    <Page>
      <Envelope>
        <EnvelopeFold />
        <EnvelopeLine />
        <EnvelopeText>Open me</EnvelopeText>
      </Envelope>
    </Page>
  )
}

export default Content
