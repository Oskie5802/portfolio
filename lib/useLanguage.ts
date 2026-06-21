import { useEffect, useState } from 'react';

export type Lang = 'en' | 'pl';

const STORAGE_KEY = 'lang';

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'pl') return stored;
  } catch {
    /* localStorage may be unavailable (private mode) */
  }
  const nav = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  return nav.toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = (next: Lang) => {
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return { lang, setLang: changeLang };
}
