import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Button from './Button'
import Content from './Content'

const StyledHome = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h2`
  font-size: 35px;
  color: #0b2f5a;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Aptos', 'Segoe UI', sans-serif;
`;

const StyledParagraph = styled.p`
  font-size: 35px;
  color: #0b2f5a;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Brush Script MT', 'Comic Sans MS', cursive;
`;
const Home = () => {
  const [showContent, setShowContent] = React.useState(false);
  const [view, setView] = React.useState(false);

  if (view === 'content') {
    return <Content onBack={() => setView('home')} />;
  }
  if (view === 'letter') {
    return <Content onBack={() => setView('content')} />;
  }

  if (showContent) {
    return <Content onBack={() => setShowContent(false)}/>;
  }
  return (
    <StyledHome>
      <StyledHeading>Welcome to My website</StyledHeading>
      <StyledParagraph>I have a present for you, double click the button below:</StyledParagraph>
      <Button onDoubleclick={() => setView('content')}/>
    </StyledHome>
  )
}

export default Home
