export default {
  lang: 'ja',
  title: '北大言語学サークル Huling',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/docs/': sidebarDocs(),
      '/olympiad/': sidebarOlympiad(),
    },

    editLink: {
      pattern: 'https://github.com/hulinguistics/huling/edit/dev/src/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [{ icon: 'twitter', link: 'https://twitter.com/HU_Linguistic' }],

    footer: {
      copyright: 'Copyright © 2022 Huling',
    },
  },
};

function nav() {
  return [
    { text: 'About', link: '/about/' },
    { text: 'Booklet', link: '/booklet/' },
    { text: 'Docs', link: '/docs/about/', activeMatch: '/docs/' },
    { text: 'Olympiad', link: '/olympiad/about/', activeMatch: '/olympiad/' },
  ];
}

function sidebarDocs() {
  return [
    {
      text: '言語学の概説',
      items: [
        { text: '「言語学」とは？', link: '/docs/about/' },
        { text: '文法用語の解説', link: '/docs/grammar/' },
      ],
    },
    {
      text: '言語の比較',
      items: [{ text: '各言語の世界人権宣言', link: '/docs/udhr/' }],
    },
    {
      text: '言語ごとの概説',
      items: [
        { text: 'ドイツ語 / Deutsch', link: '/docs/deu/' },
        { text: 'フランス語 / Français', link: '/docs/fra/' },
        { text: 'スペイン語/ Español', link: '/docs/spa/' },
        { text: 'ロシア語/ Русский', link: '/docs/rus/' },
        { text: '中国語 / 汉语 (普通话)', link: '/docs/zho/' },
        { text: '韓国朝鮮語 / 한국어', link: '/docs/kor/' },
        { text: 'ラテン語 / Latina', link: '/docs/lat/' },
        { text: '古典ギリシア語 / Ἑλληνική', link: '/docs/grc/' },
      ],
    },
  ];
}

function sidebarOlympiad() {
  return [
    {
      text: '言語学オリンピックについて',
      items: [{ text: '「言語学オリンピック」とは？', link: '/olympiad/about/' }],
    },
    {
      text: 'オリンピック問題解説集',
      items: [
        { text: 'JOL2019-4 イヌクティトゥット語', link: '/olympiad/jol/2019/4/' },
        { text: 'JOL2022-1 タグバヌワ文字', link: '/olympiad/jol/2022/1/' },
        { text: 'JOL2022-2 タワラ語', link: '/olympiad/jol/2022/2/' },
        { text: 'APLO2022-1 パナラ語', link: '/olympiad/aplo/2022/1/' },
        { text: 'UKLO2021R1-1 オガム文字', link: '/olympiad/uklo/2021/1/1/' },
        { text: 'UKLO2021R1-2 カビル語', link: '/olympiad/uklo/2021/1/2/' },
        { text: 'UKLO2021R1-3 ワアマ語', link: '/olympiad/uklo/2021/1/3/' },
      ],
    },
  ];
}
