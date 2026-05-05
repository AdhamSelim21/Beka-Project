export const LANGUAGES_READONLY = [
  { label: 'English', code: 'en' },
  { label: 'العربية', code: 'ar', rtl: true },
  { label: 'Français', code: 'fr' },
  { label: 'Türkçe', code: 'tr' },
] as const

export const LANGUAGES = [...LANGUAGES_READONLY]
export const DEFAULT_LOCALE = 'en'
