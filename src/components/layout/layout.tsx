import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { cn } from '../../classname';
import { IConfig } from '../../contracts/config';
import { FromYaml } from '../../contracts/utils';
import './colors.css';
import './fonts.css';
import './layout.css';

const cnPage = cn('page');

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
    <div className={cnPage()}>
      <Helmet>
        <title>Max Pavlov</title>
      </Helmet>
      <header className={cnPage('header')}>
        <div>{title}</div>
        <div>{description}</div>
      </header>
      <main>{children}</main>
      <footer className={cnPage('footer')}>Footer</footer>
    </div>
  );
};
