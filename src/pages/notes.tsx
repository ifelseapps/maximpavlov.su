import React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../components/title';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <Title level={1} className='content__row'>
        Notes
      </Title>
      <p className='content__row'>Coming soon.</p>
    </>
  );
};

export default IndexPage;
