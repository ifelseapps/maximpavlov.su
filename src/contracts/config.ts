export interface IConfig {
  layout: {
    title: string;
    description: string;
    menu: Array<{
      name: string;
      path: string;
      highlighted?: boolean;
      pushed?: boolean;
    }>;
  };
}
