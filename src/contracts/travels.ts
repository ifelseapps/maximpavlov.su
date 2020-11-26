export interface ITravelsResultQuery {
  allMarkdownRemark: {
    nodes: ITravelItem[];
  };
}

export interface ITravelItem {
  frontmatter: {
    slug: string;
    title: string;
    year: string;
  };
}
