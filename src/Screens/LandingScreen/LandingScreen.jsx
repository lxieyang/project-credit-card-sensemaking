import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets//images/credit-card-transparent-background.png';
import styled from 'styled-components';

import './LandingScreen.css';

const LogoContainer = styled.div`
  margin-top: 8vh;
  @media (max-width: 600px) {
    margin-top: 6vh;
  }
`;

const LogoImg = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  border: 2px solid white;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 1px 15px;
`;

const TitleContainer = styled.div`
  font-size: 6rem;
  font-weight: 700;
  margin-top: 2rem;
  color: #fff;
  /* @media (max-width: 600px) {
    margin-top: 6rem;
  } */
`;

const SubtitleContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 1rem;
  color: #fff;
`;

const StartButtonContainer = styled.div`
  margin-top: 30vh;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 20vh;
  }

  @media (max-width: 600px) {
    margin-top: 14vh;
  }
`;

class LandingScreen extends Component {
  componentDidMount() {
    document.body.classList.add('LandingPageBackgroundColor');
  }

  componentWillUnmount() {
    document.body.classList.remove('LandingPageBackgroundColor');
  }

  render() {
    return (
      <div className="container">
        <LogoContainer>
          <Link to="/">
            <LogoImg src={Logo} />
          </Link>
        </LogoContainer>
        <TitleContainer>Introducing NerdyWallet</TitleContainer>
        <SubtitleContainer>
          A new way to search for credit cards.
        </SubtitleContainer>
        <StartButtonContainer>
          <Link to="/quiz" className="GetStartedButton">
            Get Started
          </Link>
        </StartButtonContainer>
      </div>
    );
  }
}

export default LandingScreen;
