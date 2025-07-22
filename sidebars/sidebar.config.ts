import type { Sidebar } from '@rspress/core';
import {
  javascriptProgrammingLanguageSidebar,
  typescriptProgrammingLanguageSidebar,
  javaProgrammingLanguageSidebar,
  kotlinProgrammingLanguageSidebar,
  pythonProgrammingLanguageSidebar,
  csharpProgrammingLanguageSidebar,
  goProgrammingLanguageSidebar,
  rustProgrammingLanguageSidebar,
} from './programming-language';

export const sidebar: Sidebar = {
  '/programming-language/javascript': javascriptProgrammingLanguageSidebar,
  '/programming-language/typescript': typescriptProgrammingLanguageSidebar,
  '/programming-language/java': javaProgrammingLanguageSidebar,
  '/programming-language/kotlin': kotlinProgrammingLanguageSidebar,
  '/programming-language/python': pythonProgrammingLanguageSidebar,
  '/programming-language/csharp': csharpProgrammingLanguageSidebar,
  '/programming-language/go': goProgrammingLanguageSidebar,
  '/programming-language/rust': rustProgrammingLanguageSidebar,
  '/developments/frontend': [
    {
      text: 'ReactJS',
      items: [],
    },
    {
      text: 'VueJS',
      items: [],
    },
    {
      text: 'Angular',
      items: [],
    },
    {
      text: 'Astro',
      items: [],
    },
    {
      text: 'Svelte',
      items: [],
    },
  ],
  '/developments/backend': [
    {
      text: 'Java',
      items: [],
    },
    {
      text: 'JS/TS',
      items: [],
    },
    {
      text: 'Go',
      items: [],
    },
    {
      text: 'CSharp',
      items: [],
    },
    {
      text: 'Python',
      items: [],
    },
  ],
  '/developments/devops': [
    {
      text: 'DevOps',
      items: [],
    },
  ],
};
