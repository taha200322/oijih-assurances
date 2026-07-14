#!/usr/bin/env python3
"""
Apply all upgrades to the OIJIH Assurances website:
1. Fix navbar logo - remove white box, use logo directly, bigger
2. Hide Next.js "N" icon
3. FR/AR switcher - proper button with border
4. Fix duplicate TÉMOIGNAGES text
5. Make testimonial cards lighter
6. Add photo placeholder circle
7. PROCESS section - navy bg, remove checkmark, bigger circles with gold border, add icons
8. Consistent section backgrounds
9. Smooth fade-in animations
"""

import re

# Read the current page.tsx
with open('/home/z/my-project/src/app/page.tsx', 'r') as f:
    content = f.read()

# ══════════════════════════════════════════════════════════════════════
# EDIT 1: Add new icons (process step icons + person placeholder)
# ══════════════════════════════════════════════════════════════════════

new_icons = '''  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  phoneCall: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      <path d="M14.05 2a9 9 0 0 1 8 7.94"/>
      <path d="M14.05 6A5 5 0 0 1 18 10"/>
    </svg>
  ),
  searchDoc: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
      <path d="M14 2v6h6"/>
      <path d="m16 13-3.5 3.5L11 15"/>
    </svg>
  ),
  shieldCheck: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  person: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/>
    </svg>
  ),'''

# Replace the linkedin icon (find the old one and add new icons after)
old_linkedin = """  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),"""

content = content.replace(old_linkedin, new_icons)

# Also add processStepIcons array after serviceIcons/whyIcons
old_icon_arrays = """const serviceIcons = [Icons.car, Icons.home, Icons.multirisque, Icons.health, Icons.business, Icons.travel];
const whyIcons = [Icons.trust, Icons.proximity, Icons.commitment];"""

new_icon_arrays = """const serviceIcons = [Icons.car, Icons.home, Icons.multirisque, Icons.health, Icons.business, Icons.travel];
const whyIcons = [Icons.trust, Icons.proximity, Icons.commitment];
const processStepIcons = [Icons.phoneCall, Icons.searchDoc, Icons.shieldCheck];"""

content = content.replace(old_icon_arrays, new_icon_arrays)

# ══════════════════════════════════════════════════════════════════════
# EDIT 2: Fix navbar logo - bigger, no white box, proper sizing
# ══════════════════════════════════════════════════════════════════════

old_navbar_logo = """            {/* Logo — white version on transparent navbar, original on scrolled white navbar */}
            <button onClick={() => scrollTo('hero')} className="flex items-center group">
              <img
                src={scrolled ? '/logo.png' : '/logo-white.png'}
                alt="OIJIH Assurances"
                className={`h-20 md:h-[140px] w-auto transition-all duration-500 group-hover:scale-[1.03] ${!scrolled ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]' : ''}`}
              />
            </button>"""

new_navbar_logo = """            {/* Logo — transparent, no box */}
            <button onClick={() => scrollTo('hero')} className="flex items-center group">
              <img
                src={scrolled ? '/logo.png' : '/logo-white.png'}
                alt="OIJIH Assurances"
                className={`h-16 md:h-24 w-auto transition-all duration-500 group-hover:scale-[1.03] ${!scrolled ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]' : ''}`}
              />
            </button>"""

content = content.replace(old_navbar_logo, new_navbar_logo)

# ══════════════════════════════════════════════════════════════════════
# EDIT 3: Fix language switcher - proper button with border
# ══════════════════════════════════════════════════════════════════════

old_lang_switch = """              {/* Language Switcher */}
              <div className={`lang-switch transition-colors duration-500 ${!scrolled ? 'border-white/20' : ''}`}>
                <button
                  onClick={() => setLang('fr')}
                  className={`lang-btn ${lang === 'fr' ? 'lang-btn-active' : ''} ${!scrolled && lang !== 'fr' ? 'text-white/60' : ''}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('ar')}
                  className={`lang-btn ${lang === 'ar' ? 'lang-btn-active' : ''} ${!scrolled && lang !== 'ar' ? 'text-white/60' : ''}`}
                >
                  AR
                </button>
              </div>"""

new_lang_switch = """              {/* Language Switcher — proper button with border */}
              <div className={`lang-switch ${!scrolled ? 'border-white/30 hover:border-white/50' : 'border-[#0D1F5C]/20 hover:border-[#C9A84C]'}`}>
                <button
                  onClick={() => setLang('fr')}
                  className={`lang-btn ${lang === 'fr' ? 'lang-btn-active' : ''} ${!scrolled && lang !== 'fr' ? 'text-white/70' : ''}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('ar')}
                  className={`lang-btn ${lang === 'ar' ? 'lang-btn-active' : ''} ${!scrolled && lang !== 'ar' ? 'text-white/70' : ''}`}
                >
                  AR
                </button>
              </div>"""

content = content.replace(old_lang_switch, new_lang_switch)

# ══════════════════════════════════════════════════════════════════════
# EDIT 4: Fix Services section bg — white to light grey
# ══════════════════════════════════════════════════════════════════════

content = content.replace(
    '<section id="services" className="py-20 md:py-28 bg-white">',
    '<section id="services" className="py-20 md:py-28 bg-[#F8F7F4]">'
)

# ══════════════════════════════════════════════════════════════════════
# EDIT 5: Fix Process section — complete rework
# Navy bg, remove checkmark, bigger circles with gold border, add icons
# ══════════════════════════════════════════════════════════════════════

old_process = """      {/* ──────── How It Works ──────── */}
      <section id="process" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('process') ? 'visible' : ''}`} id="process-reveal">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A84C] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Étapes Simples' : 'خطوات بسيطة'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>
                {data.process.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.process.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C] to-[#C9A84C]/20" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s ease-in-out infinite' }} />
            </div>

            {data.process.steps.map((step, i) => (
              <div
                key={i}
                className={`reveal relative text-center ${revealedSections.has('process') ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative z-10 inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#0D1F5C] to-[#162572] text-white mb-8 mx-auto shadow-xl shadow-[#0D1F5C]/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">{`0${i + 1}`}</div>
                    <div className="mt-1 text-[#C9A84C]">{Icons.check}</div>
                  </div>
                </div>
                <h3 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-xl font-bold text-[#0D1F5C] mb-3`}>
                  {step.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed max-w-sm mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>"""

new_process = """      {/* ──────── How It Works ──────── */}
      <section id="process" className="py-20 md:py-28 bg-[#0D1F5C] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('process') ? 'visible' : ''}`} id="process-reveal">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A84C] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Étapes Simples' : 'خطوات بسيطة'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4`}>
                {data.process.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{data.process.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-[88px] left-[20%] right-[20%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-[#C9A84C]/30 via-[#C9A84C] to-[#C9A84C]/30" />
            </div>

            {data.process.steps.map((step, i) => (
              <div
                key={i}
                className={`reveal relative text-center ${revealedSections.has('process') ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number — bigger circle with gold border, no checkmark */}
                <div className="relative z-10 inline-flex items-center justify-center w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#C9A84C] bg-[#0D1F5C] text-white mb-6 mx-auto shadow-2xl shadow-[#C9A84C]/15">
                  <span className="text-4xl md:text-5xl font-bold text-[#C9A84C]">{`0${i + 1}`}</span>
                </div>
                {/* Step icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center">
                    {processStepIcons[i]}
                  </div>
                </div>
                <h3 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-xl font-bold text-white mb-3`}>
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-sm mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>"""

content = content.replace(old_process, new_process)

# ══════════════════════════════════════════════════════════════════════
# EDIT 6: Fix Testimonials section
# Remove duplicate label, lighter cards, photo placeholder circle
# ══════════════════════════════════════════════════════════════════════

old_testimonials_header = """          <div className={`reveal ${revealedSections.has('testimonials') ? 'visible' : ''}`} id="testimonials-reveal">
            <div className="text-center mb-16">
              <span className="inline-block text-[#C9A84C] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Témoignages' : 'شهادات'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4`}>
                {data.testimonials.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{data.testimonials.subtitle}</p>
            </div>
          </div>"""

new_testimonials_header = """          <div className={`reveal ${revealedSections.has('testimonials') ? 'visible' : ''}`} id="testimonials-reveal">
            <div className="text-center mb-16">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4`}>
                {data.testimonials.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{data.testimonials.subtitle}</p>
            </div>
          </div>"""

content = content.replace(old_testimonials_header, new_testimonials_header)

# Fix testimonial cards — lighter bg + photo placeholder
old_testimonial_card = """              <div
                key={i}
                className={`reveal testimonial-card bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.1] hover:border-white/20 hover:-translate-y-1 ${revealedSections.has('testimonials') ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#C9A84C] mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>{Icons.star}</span>
                  ))}
                </div>

                <p className="text-white/75 leading-relaxed mb-8 text-sm">{item.text}</p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#B08F35] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.name}</div>
                    <div className="text-white/40 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>"""

new_testimonial_card = """              <div
                key={i}
                className={`reveal testimonial-card bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 ${revealedSections.has('testimonials') ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#C9A84C] mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>{Icons.star}</span>
                  ))}
                </div>

                <p className="text-white/80 leading-relaxed mb-8 text-sm">{item.text}</p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/15">
                  {/* Photo placeholder circle with person icon */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#B08F35] flex items-center justify-center text-white shadow-lg overflow-hidden">
                    {Icons.person}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.name}</div>
                    <div className="text-white/50 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>"""

content = content.replace(old_testimonial_card, new_testimonial_card)

# ══════════════════════════════════════════════════════════════════════
# EDIT 7: Fix Contact section bg — white to light grey
# ══════════════════════════════════════════════════════════════════════

content = content.replace(
    '<section id="contact" className="py-20 md:py-28 bg-white">',
    '<section id="contact" className="py-20 md:py-28 bg-[#F8F7F4]">'
)

# ══════════════════════════════════════════════════════════════════════
# Write the updated file
# ══════════════════════════════════════════════════════════════════════

with open('/home/z/my-project/src/app/page.tsx', 'w') as f:
    f.write(content)

print("page.tsx updated successfully!")

# Verify key changes
with open('/home/z/my-project/src/app/page.tsx', 'r') as f:
    content = f.read()

checks = [
    ('processStepIcons', 'processStepIcons' in content),
    ('Icons.person', 'Icons.person' in content),
    ('Icons.phoneCall', 'Icons.phoneCall' in content),
    ('Navy process bg', 'bg-[#0D1F5C] relative overflow-hidden' in content),
    ('Gold border process', 'border-4 border-[#C9A84C]' in content),
    ('Services light grey bg', 'id="services" className="py-20 md:py-28 bg-[#F8F7F4]"' in content),
    ('Contact light grey bg', 'id="contact" className="py-20 md:py-28 bg-[#F8F7F4]"' in content),
    ('Lighter testimonial cards', 'bg-white/15 backdrop-blur-md' in content),
    ('Photo placeholder', 'Icons.person' in content),
    ('Navbar logo sizing', 'h-16 md:h-24' in content),
]

print("\n=== Verification ===")
all_ok = True
for name, result in checks:
    status = "PASS" if result else "FAIL"
    print(f"  [{status}] {name}")
    if not result:
        all_ok = False

if all_ok:
    print("\nAll checks passed!")
else:
    print("\nSome checks failed - manual review needed")
