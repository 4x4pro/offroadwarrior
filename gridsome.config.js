// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'offroadwarrior',
  siteDescription: 'Here we will share our off-road experience with our followers. Ask our experts any questions you have!',
  siteUrl: 'https://4x4pro.github.io',
  pathPrefix: '/offroadwarrior',
  templates: {
    Post: '/blog/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: [],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
