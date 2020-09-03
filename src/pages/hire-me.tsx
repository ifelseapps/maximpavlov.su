import React from 'react';
import { Separator } from '../components/separator';
import { TechnologyStack } from '../components/technology-stack';
import { Title } from '../components/title';
import { Helmet } from 'react-helmet';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Hire me</title>
      </Helmet>
      <Title level={1} className='content__row'>
        Hire me
      </Title>
      <div className='content__row'>
        <p>I live in Russia and work remotely. I'm available from 9:00 to 17:30 Moscow time (UTC + 3).</p>
        <p>I prefer working with product teams.</p>
        <p>High quality is the main priority in my work, and I have my quality standards:</p>
        <ul>
          <li>
            <strong>Standards-compliant</strong>;
          </li>
          <li>
            <strong>Optimized for touch devices</strong>;
          </li>
          <li>
            <strong>Full responsive</strong>. I use the <i>mobile first</i> approach;
          </li>
          <li>
            <strong>Cross-browser compatible</strong>. However, this does not mean that product should look identical in all browsers;
          </li>
          <li>
            <strong>Optimized for performance</strong>;
          </li>
          <li>
            <strong>Accessible</strong>. A product needs to be usable by users of assistive technologies by default;
          </li>
          <li>
            <strong>Clean code</strong> that is easy to maintain ans scale;
          </li>
        </ul>
        <p>If you do not agree with this approach then we are not going to work.</p>
      </div>
      <Separator className='content__row' />
      <div className='content__row'>
        <p>
          I have experience in industrial web development for about 5.5 years. During this time, I worked on products for the following
          industries: ecommerce, medicine, hightech, fintech, tourism. According to the terms of the NDA I can't show these projects.
        </p>
      </div>
      <Separator className='content__row' />
      <div className='content__row'>
        <p>
          I know JavaScript, TypeScript, CSS, HTML at an expert level. My technology stack includes Angular and React, but I prefer using
          Angular.
        </p>
        <p>My technology stack:</p>
        <TechnologyStack />
      </div>
    </>
  );
};

export default IndexPage;
