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
import { Transition } from '../transition';

export const cnLayout = cn('layout');

const setKeyboardMode = () => document.body.classList.add('keyboard-mode');
const setMouseMode = () => document.body.classList.remove('keyboard-mode');

const getTopMenuRenderer = (path: string) => (menu: MenuConfig) => (
  <Menu animation>
    {menu.map((item) => (
      <MenuItem key={item.path} href={item.path} highlighted={item.highlighted} pushed={item.pushed} selected={path.includes(item.path)}>
        {item.name}
      </MenuItem>
    ))}
  </Menu>
);

const getBottomMenuRenderer = (path: string) => (config: IConfig) => (
  <Menu className={cnLayout('bottom-menu')}>
    {config.layout.menu.map((item) => (
      <MenuItem key={item.path} href={item.path} selected={path.includes(item.path)}>
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

  React.useEffect(() => {
    document.addEventListener('keydown', setKeyboardMode);
    document.addEventListener('mousedown', setMouseMode);
    return () => {
      document.removeEventListener('keydown', setKeyboardMode);
      document.removeEventListener('mousedown', setMouseMode);
    };
  }, []);

  return (
    <ConfigProvider>
      <div className={cnLayout()}>
        <Helmet>
          <title>Max Pavlov, senior frontend engineer</title>
        </Helmet>
        <Header className={cnLayout('header')} renderMenu={renderTopMenu} />
        <div className={cnLayout('main')}>
          <Transition path={path}>{children}</Transition>
        </div>

        <LayoutFooter className={cnLayout('footer')}>
          <ConfigConsumer>{renderBottomMenu}</ConfigConsumer>
          <div className={cnLayout('copyright')}>
            <p>
              &copy;&nbsp;2018 &mdash; {year}&nbsp;<strong>Max Pavlov</strong>. All&nbsp;right&nbsp;reserved
            </p>
            <p className={cnLayout('legal')}>
              Icons made by{' '}
              <a href='https://www.flaticon.com/authors/freepik' title='Freepik' target='_blank'>
                Freepik
              </a>
              {' '}from{' '}
              <a href='https://www.flaticon.com/' title='Flaticon' target='_blank'>
                {' '}
                www.flaticon.com
              </a>
            </p>
          </div>
        </LayoutFooter>
      </div>
    </ConfigProvider>
  );
};
