import React from 'react';
import styled from 'styled-components';
import { Layout } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Dúvidas <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Dúvida 1">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              vero amet distinctio non atque asperiores porro voluptatum
              reiciendis dolorum, voluptate, error iste sed ex consequatur
              impedit perferendis dolorem quasi officiis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Dúvida 2">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              vero amet distinctio non atque asperiores porro voluptatum
              reiciendis dolorum, voluptate, error iste sed ex consequatur
              impedit perferendis dolorem quasi officiis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Dúvida 3">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              vero amet distinctio non atque asperiores porro voluptatum
              reiciendis dolorum, voluptate, error iste sed ex consequatur
              impedit perferendis dolorem quasi officiis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Dúvida 4">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              vero amet distinctio non atque asperiores porro voluptatum
              reiciendis dolorum, voluptate, error iste sed ex consequatur
              impedit perferendis dolorem quasi officiis.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }

  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
