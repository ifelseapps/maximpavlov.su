import React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../components/title';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { ITravelItem, ITravelsResultQuery } from '../contracts/travels';
import './travels.css';

const TravelsPage: React.FC = () => {
  const result = useStaticQuery<ITravelsResultQuery>(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___year], order: DESC }) {
        nodes {
          frontmatter {
            slug
            title
            year
          }
        }
      }
    }
  `);

  const itemsByYears = React.useMemo(
    () =>
      result.allMarkdownRemark.nodes.reduce<Record<string, ITravelItem[]>>(
        (acc, node) => ({ ...acc, [node.frontmatter.year]: (acc[node.frontmatter.slug] || []).concat([node]) }),
        {},
      ),
    [result],
  );

  const years = React.useMemo(() => Object.keys(itemsByYears).sort((a, b) => (a > b ? -1 : 1)), [itemsByYears]);

  return (
    <>
      <Helmet>
        <title>Travels</title>
      </Helmet>
      <Title level={1} className='content__row'>
        Travels
      </Title>
      <div className='travels-groups content__row'>
        {years.map((year) => (
          <div key={year} className='travels-groups__item'>
            <Title level={2}>{year}</Title>
            <ul>
              {itemsByYears[year].map((node) => (
                <li key={node.frontmatter.slug}>
                  <Link to={`/travels/${node.frontmatter.slug}/`}>{node.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TravelsPage;
