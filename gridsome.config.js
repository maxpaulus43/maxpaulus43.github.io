// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Paulus Palace',
  siteDescription: 'This is where Max shows off all the stuff in his mind palace.',
  siteUrl: 'https://maxpaul.us',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'now.md',
        typeName: 'NowPost'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    }
  ],
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ]
    }
  }
}
