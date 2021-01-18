import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
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
        <Toggle title="Daily Schedule">
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
        <Toggle title="Payment Methods">
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
        <Toggle title="What Do You Offer">
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
