import React from 'react';
import { Title } from '../components/title';
import { Helmet } from 'react-helmet';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Title level={1} className='content__row'>
        Contacts
      </Title>
      <p className='content__row'>
        The best way to contact me is to write an email to{' '}
        <a href='m&#97;ilt&#111;&#58;%&#54;&#68;e%&#52;0ma%78&#105;mp&#97;&#37;7&#54;l&#111;v%2Es&#37;7&#53;'>
          me&#64;m&#97;ximpavlov&#46;su
        </a>
        . Follow me on{' '}
        <a href='https://www.twitter.com/ifelseapps' target='_blank'>
          Twitter
        </a>
        {', '}
        <a href='https://www.facebook.com/ifelseapps' target='_blank'>
          Facebook
        </a>{' '}
        and{' '}
        <a href='https://www.github.com/ifelseapps' target='_blank'>
          Github
        </a>
        .
      </p>
    </>
  );
};

export default IndexPage;
