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
const Home = () => {
  const [showContent, setShowContent] = React.useState(false);
  const [view, setView] = React.useState(false);

  if (showContent) {
    return <Content />;
  }
  return (
    <StyledHome>
      <h2>Welcome to the Home Page</h2>
      <p>To go to the next page, click the button below:</p>
      <Button onDoubleclick={() => setShowContent(true)}/>
      {/* {view === 'content' && <Content />} */}
    </StyledHome>
  )
}

export default Home
