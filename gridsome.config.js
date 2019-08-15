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
        refs: {
          tags: {
            typeName: 'Tag',
            route: 'tag/:id',
            create: true
          }
        }
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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'portfolio/*.md',
        typeName: 'Project',
        refs: {
          skills: {
            typeName: 'Skill',
            route: 'skill/:id',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.NODE_ENV === 'production' ? process.env.G_TRACKING_ID : "none"
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        ['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true }]
      ]
    }
  }
}
