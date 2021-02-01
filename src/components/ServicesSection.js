import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { Layout, Description, Image } from '../styles';

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          Serviços de <span>alta qualidade</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Lorem.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Lorem, ipsum.</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Lorem, ipsum.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Lorem.</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(Layout)`
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 25rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection;
