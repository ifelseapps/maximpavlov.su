import React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../components/title';
import { graphql, Link, useStaticQuery } from 'gatsby';

const IndexPage: React.FC = () => {
  const result = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>Travels</title>
      </Helmet>
      <Title level={1} className='content__row'>
        Travels
      </Title>
      <ul className='content__row'>
        {result.allMarkdownRemark.nodes.map((node: any) => (
          <li key={node.frontmatter.slug}>
            <Link to={`/travels/${node.frontmatter.slug}/`}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;
