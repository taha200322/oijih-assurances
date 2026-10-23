'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { site, telLink, waLink } from '@/config/site';
import { content, type Lang } from '@/config/content';
import { Icons } from '@/components/site/icons';
import { useLang } from '@/lib/useLang';
import { track } from '@/lib/track';

const serviceIcons = [Icons.car, Icons.home, Icons.health, Icons.business, Icons.travel, Icons.multirisque];
const whyIcons = [Icons.shieldCheck, Icons.trust, Icons.searchDoc, Icons.proximity, Icons.commitment, Icons.phoneCall];

/* Moroccan phone check: 06/07/05 + 8 digits, or +212 / 00212 format */
function isValidPhone(raw: string) {
  const d = raw.replace(/[\s.\-()]/g, '');
  return /^(?:\+212|00212|0)[5-7]\d{8}$/.test(d);
}

/* ─────────────── Small shared pieces ─────────────── */

function SectionTitle({ kicker, title, sub, light }: { kicker: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="text-center mb-10 md:mb-14">
      <span className="inline-block text-[#A8875A] font-bold text-sm tracking-wider uppercase mb-2">{kicker}</span>
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-[#0D1F5C]'}`}>{title}</h2>
      <div className="section-divider mx-auto" />
      {sub && <p className={`mt-5 text-lg max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-[#4B5563]'}`}>{sub}</p>}
    </div>
  );
}

function WaButton({ href, label, className = '' }: { href: string; label: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => track('Contact', { method: 'whatsapp' })}
      className={`inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/30 transition-all active:scale-[0.98] ${className}`}>
      <span className="[&_svg]:w-7 [&_svg]:h-7">{Icons.whatsapp}</span>
      {label}
    </a>
  );
}

function CallButton({ label, number, className = '' }: { label: string; number: { display: string; intl: string }; className?: string }) {
  return (
    <a href={telLink(number.intl)} onClick={() => track('Contact', { method: 'phone' })}
      className={`inline-flex items-center justify-center gap-3 font-bold rounded-2xl transition-all active:scale-[0.98] ${className}`}>
      <span className="[&_svg]:w-6 [&_svg]:h-6">{Icons.phone}</span>
      <span>{label} <span dir="ltr" className="whitespace-nowrap">{number.display}</span></span>
    </a>
  );
}

/* ─────────────── Page ─────────────── */

export default function Home() {
  const [lang, setLang] = useLang();
  const c = content[lang];
  const isAr = lang === 'ar';

  return (
    <div className={`min-h-screen flex flex-col bg-white pb-20 md:pb-0 ${isAr ? 'font-[var(--font-cairo)]' : 'font-[var(--font-inter)]'}`}>
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />

      {/* ══════ Services ══════ */}
      <section id="services" className="py-16 md:py-24 bg-[#F8F7F4] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={c.services.kicker} title={c.services.title} sub={c.services.sub} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {c.services.items.map((s, i) => (
              <a key={i} href={waLink(c.wa.service(s.title))} target="_blank" rel="noopener noreferrer"
                onClick={() => track('Contact', { method: 'whatsapp', service: s.title })}
                className="group flex items-start gap-4 bg-white rounded-2xl p-5 md:p-7 border-2 border-transparent hover:border-[#A8875A] shadow-md shadow-[#0D1F5C]/5 transition-all active:scale-[0.99]">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#0D1F5C] text-[#A8875A] flex items-center justify-center">{serviceIcons[i]}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0D1F5C] mb-1">{s.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[#1EA952] font-bold">
                    <span className="[&_svg]:w-5 [&_svg]:h-5">{Icons.whatsapp}</span>{c.services.ask}
                    <span className="rtl-flip">{Icons.arrowRight}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Why us ══════ */}
      <section id="why" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={c.why.kicker} title={c.why.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {c.why.items.map((w, i) => (
              <div key={i} className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[#F8F7F4]">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#A8875A]/15 text-[#A8875A] flex items-center justify-center [&_svg]:w-7 [&_svg]:h-7">{whyIcons[i]}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0D1F5C] mb-1">{w.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 3 steps ══════ */}
      <section className="py-16 md:py-20 bg-[#0D1F5C] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-5xl mx-auto px-4">
          <SectionTitle kicker={c.steps.kicker} title={c.steps.title} light />
          <div className="grid md:grid-cols-3 gap-6">
            {c.steps.items.map((s, i) => (
              <div key={i} className="flex md:flex-col items-center md:text-center gap-4">
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#A8875A] flex items-center justify-center text-2xl md:text-3xl font-bold text-[#A8875A]">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-white/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <WaButton href={waLink(c.wa.general)} label={c.hero.btnWhatsapp} className="w-full sm:w-auto px-8 py-4 text-lg" />
          </div>
        </div>
      </section>

      <MapSection lang={lang} />
      <LeadForm lang={lang} />

      {/* ══════ FAQ ══════ */}
      <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle kicker={c.faq.kicker} title={c.faq.title} />
          <div className="space-y-3">
            {c.faq.items.map((f, i) => (
              <details key={i} className="group rounded-2xl border-2 border-[#0D1F5C]/10 open:border-[#A8875A]/50 bg-white">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 text-lg font-bold text-[#0D1F5C]">
                  {f.q}
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#0D1F5C]/5 flex items-center justify-center transition-transform group-open:rotate-180">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[#4B5563] leading-relaxed text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
      <MobileBar lang={lang} />

      {/* Floating WhatsApp — desktop only (phones have the bottom bar) */}
      <a href={waLink(c.wa.general)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        onClick={() => track('Contact', { method: 'whatsapp' })}
        className="hidden md:flex whatsapp-btn fixed bottom-6 z-50 w-16 h-16 bg-[#25D366] rounded-full items-center justify-center text-white shadow-2xl shadow-[#25D366]/40 [&_svg]:w-8 [&_svg]:h-8"
        style={{ [isAr ? 'left' : 'right']: '1.5rem' }}>
        {Icons.whatsapp}
      </a>
    </div>
  );
}

/* ─────────────── Header ─────────────── */

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const c = content[lang];
  return (
    <header className="sticky top-0 z-40 bg-[#0D1F5C]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-3">
        <a href="#" className="shrink-0"><img src="/logo-white.png" alt={site.name} className="h-11 md:h-14 w-auto" /></a>
        <nav className="hidden lg:flex items-center gap-6 text-white/80 font-medium">
          <a href="#services" className="hover:text-[#A8875A]">{c.nav.services}</a>
          <a href="#why" className="hover:text-[#A8875A]">{c.nav.why}</a>
          <a href="#agence" className="hover:text-[#A8875A]">{c.nav.map}</a>
          <a href="#faq" className="hover:text-[#A8875A]">{c.nav.faq}</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full bg-white/10 p-1 text-sm font-bold">
            <button onClick={() => setLang('fr')} className={`px-3 py-1.5 rounded-full ${lang === 'fr' ? 'bg-white text-[#0D1F5C]' : 'text-white/80'}`}>FR</button>
            <button onClick={() => setLang('ar')} className={`px-3 py-1.5 rounded-full font-[var(--font-cairo)] ${lang === 'ar' ? 'bg-white text-[#0D1F5C]' : 'text-white/80'}`}>العربية</button>
          </div>
          <a href="#devis" className="hidden md:inline-flex bg-[#A8875A] hover:bg-[#8C6F47] text-white px-5 py-2.5 rounded-full font-bold">{c.nav.contact}</a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────── Hero ─────────────── */

function Hero({ lang }: { lang: Lang }) {
  const c = content[lang];
  return (
    <section className="relative overflow-hidden bg-[#0D1F5C]">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-14 md:pt-20 md:pb-24 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-6">
            <span className="text-[#A8875A] [&_svg]:w-5 [&_svg]:h-5">{Icons.shieldCheck}</span>
            <span className="text-white font-semibold text-sm md:text-base">{c.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            {c.hero.title1}<br /><span className="gradient-text">{c.hero.title2}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-7 max-w-xl">{c.hero.sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <WaButton href={waLink(c.wa.general)} label={c.hero.btnWhatsapp} className="px-6 py-4 text-lg" />
            <a href="#devis" className="inline-flex items-center justify-center gap-2 bg-white text-[#0D1F5C] hover:bg-[#F3EEE6] px-6 py-4 rounded-2xl font-bold text-lg transition-all active:scale-[0.98]">
              {c.hero.btnForm}
            </a>
          </div>
          <CallButton label={c.hero.btnCall} number={site.callPrimary}
            className="text-white/90 hover:text-[#A8875A] text-lg px-1" />

          <ul className="mt-8 grid sm:grid-cols-3 gap-3">
            {c.hero.points.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-white font-semibold">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#A8875A] text-white flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4">{Icons.check}</span>{p}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex justify-center">
          <img src="/logo-navy.png" alt={site.name} className="w-[380px] h-auto rounded-3xl drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-float" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Map / agency ─────────────── */

function MapSection({ lang }: { lang: Lang }) {
  const c = content[lang];
  return (
    <section id="agence" className="py-16 md:py-24 bg-[#F8F7F4] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle kicker={c.map.kicker} title={c.map.title} />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[320px] md:min-h-[460px]">
            <iframe src={site.mapsEmbed} className="w-full h-full min-h-[320px] md:min-h-[460px]" style={{ border: 0 }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${site.name} — Google Maps`} allowFullScreen />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-2 text-[#A8875A] font-bold">{Icons.location}<span>{c.map.address}</span></div>
              <p className="text-xl md:text-2xl font-bold text-[#0D1F5C] leading-snug">{site.address[lang]}</p>
            </div>
            <a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" onClick={() => track('Contact', { method: 'directions' })}
              className="flex items-center justify-center gap-3 bg-[#0D1F5C] hover:bg-[#162572] text-white py-5 rounded-2xl text-xl font-bold shadow-lg transition-all active:scale-[0.98]">
              <span className="[&_svg]:w-7 [&_svg]:h-7">{Icons.location}</span>{c.map.directions}
            </a>
            <CallButton label={c.map.call} number={site.phoneAgence}
              className="bg-white border-2 border-[#0D1F5C] text-[#0D1F5C] py-4 text-lg" />
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="text-[#A8875A] font-bold mb-3">{c.map.hours}</div>
              <ul className="space-y-2">
                {site.hours[lang].map((h, i) => (
                  <li key={i} className="flex justify-between gap-4 text-[#0D1F5C]">
                    <span>{h.days}</span><span dir="ltr" className="font-bold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="text-center text-[#0D1F5C] underline font-semibold">{c.map.openMaps}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Lead form ─────────────── */

function LeadForm({ lang }: { lang: Lang }) {
  const c = content[lang];
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhone(phone)) { setPhoneError(true); return; }
    setPhoneError(false);

    const lead = { name: name.trim(), phone: phone.trim(), type, lang, source: 'site' };
    let src = 'site';
    try {
      const p = new URLSearchParams(window.location.search);
      src = p.get('utm_source') || (p.get('fbclid') ? 'facebook' : 'site');
    } catch {}
    lead.source = src;

    // No form receiver configured yet → send the request by WhatsApp so no client is lost
    if (!site.formScriptUrl) {
      const msg = `${c.wa.general}\n${name} — ${phone} — ${type}`;
      track('Lead', { content_name: type });
      window.location.href = waLink(msg);
      return;
    }

    setStatus('sending');
    try {
      await fetch(site.formScriptUrl, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(lead),
      });
      try { sessionStorage.setItem('lead_sent', type); } catch {}
      router.push(`/merci?lang=${lang}`);
    } catch {
      setStatus('error');
    }
  };

  const field = 'w-full h-14 px-4 rounded-xl border-2 border-[#0D1F5C]/15 focus:border-[#A8875A] focus:outline-none text-lg text-[#0D1F5C] bg-white';

  return (
    <section id="devis" className="py-16 md:py-24 bg-[#0D1F5C] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative max-w-xl mx-auto px-4">
        <SectionTitle kicker={c.form.kicker} title={c.form.title} sub={c.form.sub} light />
        <form onSubmit={submit} className="bg-white rounded-3xl p-5 md:p-8 shadow-2xl space-y-4">
          <label className="block">
            <span className="block mb-1.5 font-bold text-[#0D1F5C]">{c.form.name}</span>
            <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" dir="auto" className={field} />
          </label>
          <label className="block">
            <span className="block mb-1.5 font-bold text-[#0D1F5C]">{c.form.phone}</span>
            <input required type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel"
              placeholder="06 12 34 56 78" dir="ltr" className={`${field} ${isArAlign(lang)} ${phoneError ? 'border-red-500' : ''}`} />
            {phoneError && <span className="block mt-1 text-red-600 font-semibold">{c.form.phoneError}</span>}
          </label>
          <label className="block">
            <span className="block mb-1.5 font-bold text-[#0D1F5C]">{c.form.type}</span>
            <select required value={type} onChange={(e) => setType(e.target.value)} className={field}>
              <option value="">{c.form.choose}</option>
              {c.services.items.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
            </select>
          </label>
          <button type="submit" disabled={status === 'sending'}
            className="w-full h-16 rounded-2xl bg-[#A8875A] hover:bg-[#8C6F47] text-white text-xl font-bold shadow-lg transition-all active:scale-[0.98] disabled:opacity-60">
            {status === 'sending' ? c.form.sending : c.form.send}
          </button>
          {status === 'error' && <p className="text-red-600 font-semibold text-center">{c.form.error}</p>}
          <p className="text-sm text-[#6B7280] text-center">{c.form.privacy}</p>
        </form>
        <div className="mt-6 text-center">
          <p className="text-white/80 mb-3 font-semibold">{c.form.orWhatsapp}</p>
          <WaButton href={waLink(c.wa.general)} label={site.whatsappDisplay} className="px-6 py-3.5 text-lg" />
        </div>
      </div>
    </section>
  );
}

function isArAlign(lang: Lang) { return lang === 'ar' ? 'text-right' : ''; }

/* ─────────────── Footer ─────────────── */

function Footer({ lang }: { lang: Lang }) {
  const c = content[lang];
  return (
    <footer className="bg-[#091543] text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/logo-white.png" alt={site.name} className="h-16 w-auto mb-4" />
          <p className="text-white/70">{c.footer.slogan}</p>
          <p className="text-[#A8875A] font-semibold">{c.footer.tagline}</p>
        </div>
        <div className="space-y-3">
          <a href={telLink(site.phoneMobile.intl)} className="flex items-center gap-3 text-white/80 hover:text-[#A8875A]"><span className="text-[#A8875A]">{Icons.phone}</span><span dir="ltr">{site.phoneMobile.display}</span></a>
          <a href={telLink(site.phoneAgence.intl)} className="flex items-center gap-3 text-white/80 hover:text-[#A8875A]"><span className="text-[#A8875A]">{Icons.phone}</span><span dir="ltr">{site.phoneAgence.display}</span></a>
          <a href={waLink(c.wa.general)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-[#25D366]"><span className="text-[#25D366] [&_svg]:w-5 [&_svg]:h-5">{Icons.whatsapp}</span><span dir="ltr">{site.whatsappDisplay}</span></a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/80 hover:text-[#A8875A]"><span className="text-[#A8875A]">{Icons.email}</span><span dir="ltr">{site.email}</span></a>
        </div>
        <div className="flex items-start gap-3 text-white/80">
          <span className="text-[#A8875A] mt-1">{Icons.location}</span>
          <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#A8875A]">{site.address[lang]}</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-sm text-white/50">
        <p>&copy; {new Date().getFullYear()} {site.name} / {site.nameAr}. {c.footer.rights}</p>
        <p>{c.footer.legal}</p>
      </div>
    </footer>
  );
}

/* ─────────────── Mobile bottom bar ─────────────── */

function MobileBar({ lang }: { lang: Lang }) {
  const c = content[lang];
  const btn = 'flex-1 flex flex-col items-center justify-center gap-1 py-2.5 font-bold text-sm active:opacity-80';
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex bg-white border-t border-[#0D1F5C]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
      <a href={telLink(site.callPrimary.intl)} onClick={() => track('Contact', { method: 'phone' })} className={`${btn} text-[#0D1F5C] [&_svg]:w-6 [&_svg]:h-6`}>
        {Icons.phone}{c.bar.call}
      </a>
      <a href={waLink(c.wa.general)} target="_blank" rel="noopener noreferrer" onClick={() => track('Contact', { method: 'whatsapp' })}
        className={`${btn} bg-[#25D366] text-white [&_svg]:w-7 [&_svg]:h-7`}>
        {Icons.whatsapp}{c.bar.whatsapp}
      </a>
      <a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" onClick={() => track('Contact', { method: 'directions' })}
        className={`${btn} text-[#0D1F5C] [&_svg]:w-6 [&_svg]:h-6`}>
        {Icons.location}{c.bar.map}
      </a>
    </div>
  );
}
