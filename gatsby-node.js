const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = async function ({graphql, actions}) {
  const {createPage} = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          html
          frontmatter {
            title
            year
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  posts.forEach((post) => {
    createPage({
      path: `/travels/${post.frontmatter.slug}/`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        title: post.frontmatter.title,
        slug: post.frontmatter.slug,
        year: post.frontmatter.year,
        content: post.html,
      },
    });
  });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
