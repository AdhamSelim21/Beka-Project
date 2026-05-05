// src/lib/dictionary.ts
import type { Locale } from '@/types'; // Assuming Locale is 'en' | 'ar' | 'fr' | 'tr'

const dictionaries = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  ar: () => import('@/messages/ar.json').then((module) => module.default),
  fr: () => import('@/messages/fr.json').then((module) => module.default),
  tr: () => import('@/messages/tr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  // Fallback to English if the requested locale isn't found
  const loadDictionary = dictionaries[locale] ?? dictionaries.en;
  return await loadDictionary();
};