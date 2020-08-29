export type MenuConfig = Array<{
  name: string;
  path: string;
  highlighted?: boolean;
  pushed?: boolean;
}>;

export interface IConfig {
  layout: {
    title: string;
    description: string;
    menu: MenuConfig;
  };
}
