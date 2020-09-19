module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '900'],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
            },
          ],
        },
        formats: ['woff2'],
        useMinify: true,
        usePreload: true,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout/index.ts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
        ignore: ['**/.*'], // ignore files starting with a dot
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-embedder',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              quality: 85,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                'img-left': {
                  classes: 'img-float-left',
                },
                'text-right': {
                  classes: 'text-float-right',
                },
                'img-right': {
                  classes: 'img-float-right',
                },
                'text-left': {
                  classes: 'text-float-left',
                },
                'img-normal': {
                  classes: 'img-normal',
                },
              },
            },
          },
          // 'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Max Pavlov, senior frontend engineer',
        short_name: 'Max Pavlov',
        start_url: '/',
        background_color: '#2962FF',
        theme_color: '#2962FF',
        display: 'minimal-ui',
        icon: 'src/images/icons/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
