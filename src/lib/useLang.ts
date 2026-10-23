'use client';

import { useEffect, useState } from 'react';
import type { Lang } from '@/config/content';

/* Language: ?lang=ar in the link wins (useful for Arabic Facebook ads),
   then the visitor's last choice, then French. */
export function useLang() {
  const [lang, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    let saved: string | null = null;
    try { saved = localStorage.getItem('lang'); } catch {}
    const initial = fromUrl === 'ar' || fromUrl === 'fr' ? fromUrl : saved === 'ar' ? 'ar' : 'fr';
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch {}
  };

  return [lang, setLang] as const;
}
