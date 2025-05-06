import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
    text: 'About us',
    href: getPermalink('/about'),
  },
  {
    text: 'Blog List',
    href: getBlogPermalink(),
  },
  {
    text: 'Categorie',
    href: getPermalink('tutorials', 'category'),
  },
  {
    text: 'Tags',
    href: getPermalink('astro', 'tag'),
  },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Policy',
      links: [
        { text: 'Cookie', href: getPermalink('/cookie') },
        { text: 'Privacy', href: getPermalink('/privacy') },
      ],
    },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
