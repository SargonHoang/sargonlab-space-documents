import type { NavItem } from '@rspress/core';

export const nav: NavItem[] = [
  { text: 'Home', link: '/', position: 'left' },
  {
    text: 'Programming Language',
    position: 'left',
    items: [
      {
        text: 'JavaScript',
        link: '/programming-language/javascript/',
      },
      {
        text: 'TypeScript',
        link: '/programming-language/typescript/',
      },
      {
        text: 'Java',
        link: '/programming-language/java/',
      },
      {
        text: 'Kotlin',
        link: '/programming-language/kotlin/',
      },
      {
        text: 'Python',
        link: '/programming-language/python/',
      },
      {
        text: 'CSharp',
        link: '/programming-language/csharp/',
      },
      {
        text: 'Go',
        link: '/programming-language/go/',
      },
      {
        text: 'Rust',
        link: '/programming-language/rust/',
      },
    ],
  },
  {
    text: 'Development',
    position: 'left',
    items: [
      {
        text: 'Git',
        link: '/developments/git/',
      },
      {
        text: 'Linux',
        link: '/developments/linux/',
      },
      {
        text: 'Frontend',
        link: '/developments/frontend/',
      },
      {
        text: 'Backend',
        link: '/developments/backend/',
      },
      {
        text: 'DevOps',
        link: '/developments/devops/',
      },
      {
        text: 'Automation Testing',
        link: '/developments/automation-testing/',
      },
    ],
  },
  {
    text: 'System Design',
    position: 'left',
    items: [],
  },
  {
    text: 'Homelab',
    position: 'left',
    items: [],
  },
];
