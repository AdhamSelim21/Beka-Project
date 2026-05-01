 export const LANGUAGES_READONLY = [
      { label: 'English', code: 'en' },
      { label: 'Arabic', code: 'ar', rtl: true }, 
      { label: 'French', code: 'fr' },
      { label: 'Turkish', code: 'tr' },
    ] as const

export const LANGUAGES = [...LANGUAGES_READONLY]
  export const  DEFAULT_LOCALE = 'en'
