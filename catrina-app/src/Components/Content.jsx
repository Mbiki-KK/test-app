import React from 'react'
import styled from 'styled-components'
import Letter from './Letter'
import BackButton from './BackButton'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  margin-top: 40px;
`

const Envelope = styled.div`
  position: relative;
  width: 300px;
  height: 180px;
  border: 2px solid #0b2f5a;
  border-radius: 16px;
  background: linear-gradient(180deg, #d5e8ff 0%, #f4f8ff 100%);
  box-shadow: 0 16px 30px rgba(11, 47, 90, 0.15);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 34px rgba(11, 47, 90, 0.2);
  }
`

const EnvelopeFlap = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #a9cbff 0%, #d5e8ff 100%);
  clip-path: polygon(0 0, 100% 0, 50% 48%);
  z-index: 1;
`

const CenterLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  background: rgba(11, 47, 90, 0.2);
  transform: translateY(-50%);
  z-index: 0;
`

const Seal = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #eef5ff;
  border: 3px solid #0b2f5a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 8px 18px rgba(11, 47, 90, 0.14);
`

const Heart = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  background: #f700ff;
  transform: rotate(-45deg);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: #ff00f2;
    border-radius: 50%;
  }

  &::before {
    top: -9px;
    left: 0;
  }

  &::after {
    top: 0;
    left: 9px;
  }
`

const Label = styled.div`
  position: absolute;
  bottom: 16px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-family: 'Brush Script MT', 'Comic Sans MS', cursive;
  font-size: 28px;
  color: #0b2f5a;
  z-index: 3;
`;

const Content = ({ onBack }) => {
  const [opened, setOpened] = React.useState(false)

  if (opened) {
    return <Letter onBack={() => setOpened(false)} />
  }

  return (
    <Page>
      <Envelope onClick={() => setOpened(true)}>
        <EnvelopeFlap />
        <CenterLine />
        <Seal>
          <Heart />
        </Seal>
        <Label>Open me</Label>
      </Envelope>

      <BackButton onClick={onBack} />
    </Page>
  )
}

export default Content
