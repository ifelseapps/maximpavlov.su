import React from 'react';
import { Helmet } from 'react-helmet';
import { cn } from '../../classname';
import './colors.css';
import './fonts.css';
import './layout.css';
import { ConfigConsumer, ConfigProvider } from '../../context/config';
import { IConfig } from '../../contracts/config';
import { Header } from '../header';
import { Menu, MenuItem } from '../menu';
import { LayoutFooter } from './__footer';

export const cnLayout = cn('layout');

const renderMenu = (config: IConfig) => (
  <Menu>
    {config.layout.menu.map((item) => (
      <MenuItem key={item.path} href={item.path}>
        {item.name}
      </MenuItem>
    ))}
  </Menu>
);

export const Layout: React.FC = ({ children }) => {
  const year = React.useMemo(() => new Date().getFullYear(), []);
  return (
    <ConfigProvider>
      <div className={cnLayout()}>
        <Helmet>
          <title>Max Pavlov</title>
        </Helmet>
        <Header className={cnLayout('header')} />
        <main>{children}</main>
        <LayoutFooter className={cnLayout('footer')}>
          &copy;&nbsp;2018 - {year}&nbsp;<strong>Max Pavlov</strong>. All right reserved
          <ConfigConsumer>{renderMenu}</ConfigConsumer>
        </LayoutFooter>
      </div>
    </ConfigProvider>
  );
};
