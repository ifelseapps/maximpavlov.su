import React from 'react';
import { Link } from 'gatsby';

const IndexPage: React.FC = () => {
  return (
    <>
      <p className='content__row content__row_important'>
        I'm a senior UI engineer & mentor from cold, snowy Russia with <strong>more than 5 years of experience</strong>.
      </p>
      <p className='content__row'>
        I create modern, resilient, user-friendly interfaces for web applications. I also develop <strong>design-systems</strong> and{' '}
        <strong>architecture</strong> for frontend applications. Besides, I'm an advocate for performance and accessibility on the Web.
      </p>
      <p className='content__row'>I work remotely from my office and prefer working with product teams.</p>
      <p className='content__row'>
        Find more <Link to='/about/'>about me</Link> or <Link to='/hire-me/'>hire me</Link>.
      </p>
    </>
  );
};

export default IndexPage;
