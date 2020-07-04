import React from 'react';
import { Helmet } from 'react-helmet';
import { cn } from '../../classname';
import './colors.css';
import './fonts.css';
import './layout.css';
import { ConfigProvider } from '../../context/config';
import { Header } from '../header';

const cnPage = cn('page');

export const Layout: React.FC = ({ children }) => {
  return (
    <ConfigProvider>
      <div className={cnPage()}>
        <Helmet>
          <title>Max Pavlov</title>
        </Helmet>
        <Header />
        <main>{children}</main>
        <footer className={cnPage('footer')}>Footer</footer>
      </div>
    </ConfigProvider>
  );
};
