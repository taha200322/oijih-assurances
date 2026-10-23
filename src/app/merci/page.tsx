'use client';

import { useEffect } from 'react';
import { site, waLink } from '@/config/site';
import { content } from '@/config/content';
import { Icons } from '@/components/site/icons';
import { useLang } from '@/lib/useLang';
import { track } from '@/lib/track';

export default function Merci() {
  const [lang] = useLang();
  const c = content[lang].thanks;

  // Count the Lead only once, and only when coming from the form
  useEffect(() => {
    let type: string | null = null;
    try { type = sessionStorage.getItem('lead_sent'); sessionStorage.removeItem('lead_sent'); } catch {}
    if (type === null) return;
    const fire = () => track('Lead', { content_name: type || '' });
    // the Pixel script may still be loading
    if ((window as unknown as { fbq?: unknown }).fbq) fire(); else setTimeout(fire, 1500);
  }, []);

  return (
    <main className={`min-h-screen flex items-center justify-center bg-[#0D1F5C] px-4 py-12 ${lang === 'ar' ? 'font-[var(--font-cairo)]' : 'font-[var(--font-inter)]'}`}>
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 md:p-10 text-center shadow-2xl">
        <img src="/logo.png" alt={site.name} className="h-20 w-auto mx-auto mb-6" />
        <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center [&_svg]:w-10 [&_svg]:h-10">{Icons.check}</div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#0D1F5C] mb-3">{c.title}</h1>
        <p className="text-lg text-[#4B5563] mb-8">{c.sub}</p>
        <p className="font-semibold text-[#0D1F5C] mb-3">{c.faster}</p>
        <a href={waLink(c.waMsg)} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white py-4 rounded-2xl text-lg font-bold mb-4 [&_svg]:w-7 [&_svg]:h-7">
          {Icons.whatsapp}{c.btnWa}
        </a>
        <a href={`/?lang=${lang}`} className="text-[#0D1F5C] underline font-semibold">{c.back}</a>
      </div>
    </main>
  );
}
