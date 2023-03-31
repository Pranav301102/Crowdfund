//simple react function to display home page
import React from 'react';
import { useStateContext } from '../context';
import styled from 'styled-components'
import Canvas from '../components/Canvas';


const LandingPage = () => {
  const { address } = useStateContext();
  return (
    <Main>
    <ContentContainer>
    <Content>
      <h1>CHAINFUND</h1>
      <h2>Decentralized—</h2>
      <h3>Crowd Funding with Coupons</h3>
      <p>Dont know what to do with your crypto invest here and get some real world benifits</p>
    </Content>
  </ContentContainer>
  <CanvasContainer>
    <Canvas resolution={0.30}/>
  </CanvasContainer>
  </Main>
  )
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
  margin-bottom:30vh;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const CanvasContainer = styled.div`
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  padding-right: -7em;

  @media only screen and (max-width: 1200px) {
    padding-right: 0;
    order: -1;
  }
`

const ContentContainer = styled.div`
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-top: 8em;
  @media only screen and (max-width: 1200px) {
    margin-top: 0;
  }
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4em;

  > svg {
    width: 64px;
  }

  > div {
    text-align: right;
    font-size: 0.8rem;
    width: 100px;
    font-weight: bold;
  }

  @media only screen and (max-width: 1200px) {
    padding: 2em;
  }

  @media only screen and (max-width: 600px) {
    > svg {
      width: 44px;
    }
  }
`

const Content = styled.div`
  flex: 1;
  padding-left: 1em;

  h2 {
    color: #f7057e;
    font-size: 4rem;
    margin-top: 1.2em;
    padding: 0;
    line-height: 0;
    margin-bottom: 1.2em;
    white-space: nowrap;
  }

  h3 {
    font-size: 2.3rem;
    color:#ffff ;
  }

  h1 {
    font-size: 5.9rem;
    line-height: 3.8rem;
    font-weight: 100;
    letter-spacing:25px;
    color:#ffff ;
  }

  p {
    margin-top:20vh ;
    margin-right:-100px ;
    float:right;
    text-align: right;
    font-size: 1.3rem;
    width: 300px;
    color: #ffff;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding-right: 2em;
    padding-left: 2em;
    h1 {
      font-size: 2.3rem;
      line-height: 2.8rem;
    }

    h2 {
      font-size: 2.3rem;
      line-height: 2.3rem;
      margin-bottom: 0.8rem;
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    h2 {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }

    h2 {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
`


export default LandingPage


