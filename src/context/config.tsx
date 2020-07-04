import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { IConfig } from '../contracts/config';
import { FromYaml } from '../contracts/utils';

export const configContext = React.createContext<IConfig>({} as IConfig);

const { Provider, Consumer } = configContext;

export const ConfigProvider: FC = ({ children }) => {
  const { dataYaml } = useStaticQuery<FromYaml<IConfig>>(graphql`
    {
      dataYaml {
        layout {
          title
          description
          menu {
            name
            path
            highlighted
          }
        }
      }
    }
  `);

  return <Provider value={dataYaml}>{children}</Provider>;
};
export const useConfig = (): IConfig => React.useContext(configContext);
export const ConfigConsumer = Consumer;
