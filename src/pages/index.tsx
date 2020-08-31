import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import './index.css';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index_photo.jpg" }) {
        photo: childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            aspectRatio
            src
            srcSet
            base64
          }
        }
      }
    }
  `);

  return (
    <>
      <p className='content__element content__element_important'>
        I'm a senior frontend engineer & mentor from cold, snowy Russia with <strong>more than 5 years of experience</strong>.
      </p>
      <p className='content__element'>
        I create modern, resilient, user-friendly interfaces for web applications. I also develop <strong>design-systems</strong> and{' '}
        <strong>architecture</strong> for frontend applications. Besides, I'm an advocate for performance and accessibility on the Web.
      </p>
      <p className='content__element'>I work remotely from my office and prefer working with product teams.</p>
      <p className='content__element'>
        Find more <Link to='/about/'>about me</Link> or <Link to='/hire-me/'>hire me</Link>.
      </p>
    </>
  );
};

export default IndexPage;
