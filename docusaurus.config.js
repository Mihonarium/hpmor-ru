module.exports = {
  title: "Гарри Поттер и методы рационального мышления", // !!! Если будешь добавлять anouncment, не забудь убрать из custom.css, что оно 0px.
  tagline: 'Элиезер Юдковский (Less Wrong)',
  url: 'https://xn--c1asakg.xn--p1ai',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'Mihonarium', // Usually your GitHub org/user name.
  projectName: 'hpmor-ru', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    googleAnalytics: {
      trackingID: 'UA-122331611-1',
      anonymizeIP: false,
    },
    algolia: {
      apiKey: '7f0279b8ea182402cc0e643f9526b2e1',
      appId: 'DS6E1UUJN6',
      indexName: 'prod_hpmor',
      placeholder: 'Поиск',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    hideableSidebar: true,
    navbar: {
      hideOnScroll: true,
      title: 'ГПиМРМ',
      logo: {
        alt: 'Обложка книги. Авторка - Татьяна Anforumeru. Лицензия: Creative Commons Attribution-ShareAlike 4.0 International',
        src: 'https://xn--c1asakg.xn--p1ai/img/favicon.ico',
      },
      items: [
        {href: 'https://xn--c1asakg.xn--p1ai/%D0%BE-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B5-%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B5/', label: 'О книге и переводе', position: 'right'},
        {href: 'https://xn--c1asakg.xn--p1ai/%D0%B0%D1%83%D0%B4%D0%B8%D0%BE%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0/', label: 'Аудиокнига', position: 'right'},
        {href: 'https://lesswrong.ru/forum/index.php?board=3.0', label: 'Форум', position: 'right'},
        {
          label: 'Скачать', position: 'right',
          items: [
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.epub', label: 'EPUB'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.html', label: 'HTML'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.mobi', label: 'MOBI'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.fb2.zip', label: 'FB2'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/opds.xml', label: 'OPDS'},
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Заказать на бумаге',
          items: [
            {
              label: 'Reglet',
              href: 'https://reglet.ru/pechat/hpmor',
            },
            {
              label: 'Сообщество в ВК',
              href: 'https://vk.com/hpmor_print',
            },
            {
              label: 'Чат в TG',
              href: 'https://t.me/hpmorprint',
            },
          ],
        },
        {
          title: 'Скачать',
          items: [
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.epub', label: 'EPUB'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.html', label: 'HTML'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.mobi', label: 'MOBI'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.fb2.zip', label: 'FB2'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/opds.xml', label: 'OPDS'},
          ],
        },
        {
          title: 'Информация',
          items: [
            {
              label: 'О книге и переводе',
              href: 'https://xn--c1asakg.xn--p1ai/%D0%BE-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B5-%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B5/',
            },
            {
              label: 'Аудиокнига',
              href: 'https://xn--c1asakg.xn--p1ai/%D0%B0%D1%83%D0%B4%D0%B8%D0%BE%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0/',
            },
            {
              label: 'Форум',
              href: 'https://lesswrong.ru/forum/index.php?board=3.0',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Гарри Поттер и методы рационального мышления`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/book/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/book/', // string
            from: '/book/1/foreword',
          },
          {
            to: '/book/1/1', // string
            from: '/book/1/',
          },
          {
            to: '/book/about', // string
            from: '/о-книге-и-переводе',
          },
          {
            to: '/book/audiobook', // string
            from: '/аудиокнига',
          },
        ],
      },
    ],
  ],
};
