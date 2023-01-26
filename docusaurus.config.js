// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Гарри Поттер и методы рационального мышления", // !!! Если будешь добавлять anouncment, не забудь убрать из custom.css, что оно 0px.
  tagline: 'Элиезер Юдковский',
  url: 'https://xn--c1asakg.xn--p1ai',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mihonarium', // Usually your GitHub org/user name.
  projectName: 'hpmor-ru', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
		googleAnalytics: {
		  trackingID: 'UA-122331611-1',
		  anonymizeIP: false,
		},
      }),
    ],
  ],

  themeConfig:
    ({
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    algolia: {
      apiKey: '7f0279b8ea182402cc0e643f9526b2e1',
      appId: 'DS6E1UUJN6',
      indexName: 'prod_hpmor',
      placeholder: 'Поиск',
      contextualSearch: false,
      searchParameters: {}, // Optional (if provided by Algolia)
    },
	docs: {
		sidebar: {
			hideable: true,
		},
	},
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      navbar: {
      hideOnScroll: true,
      title: 'ГПиМРМ',
        logo: {
			alt: 'Логотип "HPMOR"',
			src: 'https://xn--c1asakg.xn--p1ai/img/favicon.ico',
        },
      items: [
        {href: 'https://xn--c1asakg.xn--p1ai/book/', label: 'Читать', position: 'right'},
        {href: 'https://xn--c1asakg.xn--p1ai/%D0%BE-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B5-%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B5/', label: 'О книге и переводе', position: 'right'},
        {href: 'https://xn--c1asakg.xn--p1ai/%D0%B0%D1%83%D0%B4%D0%B8%D0%BE%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0/', label: 'Аудиокнига', position: 'right'},
        {href: 'https://lesswrong.ru/forum/index.php?board=3.0', label: 'Форум', position: 'right'},
        {
          label: 'Скачать', position: 'right',
          items: [
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.epub', label: 'EPUB'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.html', label: 'HTML'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.mobi', label: 'MOBI'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.fb2', label: 'FB2'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/opds.xml', label: 'OPDS'},
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'На бумаге',
          items: [
            {
              label: 'Чат в TG',
              href: 'https://t.me/hpmorprint',
            },
            {
              label: 'Для победителей олимпиад',
              href: 'https://habr.com/ru/post/424049/',
            },
            {
              label: 'Для библиотек',
              href: 'https://xn--c1asakg.xn--p1ai/l',
            },
          ],
        },
        {
          title: 'Скачать',
          items: [
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.epub', label: 'EPUB'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.html', label: 'HTML'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.mobi', label: 'MOBI'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/hpmor_ru.fb2', label: 'FB2'},
			{href: 'https://xn--c1asakg.xn--p1ai/files/opds.xml', label: 'OPDS'},
          ],
        },
        {
          title: 'Информация',
          items: [
            {
              label: 'Читать',
              href: 'https://xn--c1asakg.xn--p1ai/book/',
            },
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
      copyright: `Copyright © ${new Date().getFullYear()} Гарри Поттер и методы рационального мышления. В соответствии с разрешениями Джоан Роулинг и Элиезера Юдковского.`,
    },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
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
  scripts: [
	  {
	  	src: 'https://xn--c1asakg.xn--p1ai/js/remember_scroll.js',
		async: true,
	  },
  ],
};

module.exports = config;
