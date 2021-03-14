import en from './en.js'
import he from './heb.js'

export const languages = {
  EN: { resources: en, title: 'English', dir: 'ltr' },
  HEB: { resources: he, title: 'עברית', dir: 'rtl' }
};

export const availableLanguages = Object.entries(languages)
  .map(([code, { title }]) => ({ code, title }));
