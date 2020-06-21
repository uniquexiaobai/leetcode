const guide = require('../solutions/guide');

const description = `
${guide.progress.num_solved}/${guide.progress.num_total} questions solved
`;

module.exports = {
  dest: './dist',
  title: 'Leetcode Solutions',
  description,
  themeConfig: {
    search: true,
    lastUpdated: 'Last updated',
    repo: 'https://github.com/uniquexiaobai/leetcode',
    repoLabel: 'Github',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Solutions', link: `/solutions/${guide.problems[0]}` },
    ],
    sidebar: {
      '/solutions/': [
        {
          title: 'All',
          collapsable: false,
          children: guide.problems,
        },
      ],
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '',
      },
    ],
  ],
};
