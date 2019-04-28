import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/credit-card-transparent-background.png';
import GithubIcon from '../../assets/images/github-icon.png';
import styled from 'styled-components';

import appRoutes from '../../shared/appRoutes';

import './LandingScreen.css';

const LogoContainer = styled.div`
  margin-top: 5rem;
  @media (max-width: 600px) {
    margin-top: 2rem;
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
  margin-top: 1.5rem;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

const SubtitleContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 1rem;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const StartButtonContainer = styled.div`
  margin-top: 10rem;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 6rem;
  }

  @media (max-width: 600px) {
    margin-top: 3rem;
  }
`;

const FooterContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
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
          <Link to={appRoutes.quiz} className="GetStartedButton">
            Get Started
          </Link>
        </StartButtonContainer>
        <FooterContainer>
          <a
            href={`https://github.com/lxieyang/project-credit-card-sensemaking`}
            target="_blank"
          >
            <img
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                boxShadow: `0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)`
              }}
              src={GithubIcon}
            />
          </a>
        </FooterContainer>
      </div>
    );
  }
}

export default LandingScreen;
