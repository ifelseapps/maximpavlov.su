import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IConfig } from '../../contracts/config';
import { FromYaml } from '../../contracts/utils';

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<FromYaml<IConfig>>(graphql`
    {
      dataYaml {
        layout {
          title
          description
        }
      }
    }
  `);
  const { title, description } = data.dataYaml.layout;

  return (
    <div>
      <header>
        <div>{title}</div>
        <div>{description}</div>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
