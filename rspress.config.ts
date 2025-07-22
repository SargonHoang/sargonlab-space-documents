import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginShiki } from '@rspress/plugin-shiki';
import { nav } from './nav.config';
import { sidebar } from './sidebars/sidebar.config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Sargon Lab',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['postcss-loader'],
  //       type: 'css',
  //     },
  //   ],
  // },
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: true,
  },
  plugins: [pluginShiki()],
  globalStyles: path.join(__dirname, 'styles/index.css'),
  themeConfig: {
    enableScrollToTop: true,
    darkMode: true,
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
