import React from 'react';
import { Helmet } from 'react-helmet';
import { cn } from '../../classname';
import './colors.css';
import './fonts.css';
import './layout.css';
import { ConfigConsumer, ConfigProvider } from '../../context/config';
import { IConfig, MenuConfig } from '../../contracts/config';
import { Header } from '../header';
import { Menu, MenuItem } from '../menu';
import { LayoutFooter } from './__footer';
import { Content } from '../content';

export const cnLayout = cn('layout');

const getTopMenuRenderer = (path: string) => (menu: MenuConfig) => (
  <Menu>
    {menu.map((item) => (
      <MenuItem key={item.path} href={item.path} highlighted={item.highlighted} pushed={item.pushed} selected={path === item.path}>
        {item.name}
      </MenuItem>
    ))}
  </Menu>
);

const getBottomMenuRenderer = (path: string) => (config: IConfig) => (
  <Menu className={cnLayout('bottom-menu')}>
    {config.layout.menu.map((item) => (
      <MenuItem key={item.path} href={item.path} selected={item.path === path}>
        {item.name}
      </MenuItem>
    ))}
  </Menu>
);

interface ILayoutProps {
  path: string;
}

export const Layout: React.FC<ILayoutProps> = ({ path, children }) => {
  const year = React.useMemo(() => new Date().getFullYear(), []);
  const renderTopMenu = React.useCallback(getTopMenuRenderer(path), [path]);
  const renderBottomMenu = React.useCallback(getBottomMenuRenderer(path), [path]);
  return (
    <ConfigProvider>
      <div className={cnLayout()}>
        <Helmet>
          <title>Max Pavlov</title>
        </Helmet>
        <Header className={cnLayout('header')} renderMenu={renderTopMenu} />
        <Content className={cnLayout('main')}>{children}</Content>
        <LayoutFooter className={cnLayout('footer')}>
          <ConfigConsumer>{renderBottomMenu}</ConfigConsumer>
          <div className={cnLayout('copyright')}>
            &copy;&nbsp;2018 &mdash; {year}&nbsp;<strong>Max Pavlov</strong>. All&nbsp;right&nbsp;reserved
          </div>
        </LayoutFooter>
      </div>
    </ConfigProvider>
  );
};
