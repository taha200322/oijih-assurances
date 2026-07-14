'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/* ────────────────────────────── Translation Data ────────────────────────────── */

const t = {
  fr: {
    nav: {
      accueil: 'Accueil',
      services: 'Services',
      avantages: 'Avantages',
      processus: 'Processus',
      temoignages: 'Témoignages',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Devis Gratuit',
    },
    hero: {
      headline1: 'Votre Sécurité,',
      headline2: 'Notre Priorité',
      subtext: 'OIJIH Assurances vous accompagne avec expertise et dévouement pour protéger ce qui compte le plus pour vous. Des solutions d\'assurance sur mesure, adaptées à vos besoins.',
      btnDevis: 'Devis Gratuit',
      btnCall: 'Appelez-nous',
      stat1Val: '500+',
      stat1Label: 'Clients Satisfaits',
      stat2Val: '20+',
      stat2Label: 'Ans d\'Expérience',
      stat3Val: '24h',
      stat3Label: 'Réponse Rapide',
      stat4Val: '15+',
      stat4Label: 'Compagnies Partenaires',
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Des solutions d\'assurance complètes pour chaque aspect de votre vie',
      items: [
        { title: 'Assurance Auto', desc: 'Protégez votre véhicule avec une couverture complète contre les accidents, le vol et le bris de glace. Roulez en toute sérénité sur les routes du Maroc avec une protection adaptée à vos besoins.', cta: 'Demander un devis' },
        { title: 'Assurance Habitation', desc: 'Sécurisez votre foyer contre les risques d\'incendie, de vol, de dégât des eaux et de catastrophes naturelles. Votre maison mérite la meilleure protection pour votre tranquillité.', cta: 'Demander un devis' },
        { title: 'Assurance Multirisque', desc: 'Une couverture globale qui combine plusieurs garanties en un seul contrat. Idéale pour les professionnels et les entreprises, elle protège vos locaux, biens et responsabilités.', cta: 'Demander un devis' },
        { title: 'Assurance Santé', desc: 'Accédez aux meilleurs soins avec une couverture santé adaptée à votre budget. Hospitalisation, consultations, soins spécialisés et médicaments pris en charge.', cta: 'Demander un devis' },
        { title: 'Assurance Entreprise', desc: 'Protégez votre activité avec des solutions professionnelles sur mesure. Responsabilité civile professionnelle, locaux, employés, biens d\'entreprise et flotte automobile.', cta: 'Demander un devis' },
        { title: 'Assurance Voyage', desc: 'Voyagez l\'esprit libre avec une assurance voyage complète. Annulation, perte de bagages, frais médicaux à l\'étranger et rapatriement — couverture mondiale.', cta: 'Demander un devis' },
      ],
    },
    why: {
      title: 'Pourquoi Nous Choisir ?',
      subtitle: 'Des valeurs qui font la différence dans votre protection',
      items: [
        { title: 'Confiance', desc: 'Forts de plus de 20 ans d\'expérience, nous bâtissons des relations durables fondées sur la transparence et l\'honnêteté. Nos clients nous confient ce qu\'ils ont de plus précieux, et nous honorons cette confiance chaque jour par notre engagement sans faille.' },
        { title: 'Proximité', desc: 'Implantés au cœur de Salé, nous sommes à vos côtés à chaque étape. Un conseiller dédié, joignable et réactif, qui comprend vos besoins locaux et vous accompagne personnellement dans toutes vos démarches d\'assurance.' },
        { title: 'Engagement', desc: 'Nous nous engageons à vous offrir le meilleur rapport couverture-prix du marché. En cas de sinistre, notre réactivité et notre accompagnement font toute la différence pour une prise en charge rapide et efficace.' },
      ],
    },
    process: {
      title: 'Comment Ça Marche ?',
      subtitle: 'Un processus simple et rapide pour votre tranquillité',
      steps: [
        { title: 'Contactez-nous', desc: 'Appelez-nous, envoyez un email ou remplissez notre formulaire. Notre équipe est disponible pour répondre à toutes vos questions et comprendre vos besoins spécifiques.' },
        { title: 'Analyse & Devis', desc: 'Nos experts analysent votre situation et vous proposent les meilleures solutions d\'assurance adaptées à vos besoins et votre budget, avec un devis gratuit et sans engagement.' },
        { title: 'Vous Êtes Protégé', desc: 'Une fois votre contrat signé, vous êtes couvert immédiatement. Nous restons à vos côtés pour tout accompagnement et gestion de sinistre tout au long de votre contrat.' },
      ],
    },
    testimonials: {
      title: 'Ce Que Disent Nos Clients',
      subtitle: 'Des témoignages qui parlent d\'eux-mêmes',
      items: [
        { name: 'Mohammed B.', role: 'Entrepreneur à Salé', text: 'OIJIH Assurances m\'a trouvé la couverture parfaite pour mon entreprise à un tarif très compétitif. Leur réactivité et leur professionnalisme sont remarquables. Je les recommande sans hésitation à tous les entrepreneurs.' },
        { name: 'Fatima Z.', role: 'Propriétaire à Rabat', text: 'Suite à un dégât des eaux, OIJIH a été d\'une efficacité redoutable. En moins de 48h, mon dossier était traité et l\'indemnisation arrivée. Un service client exceptionnel qui vous rassure vraiment quand ça compte.' },
        { name: 'Ahmed R.', role: 'Commerçant à Salé', text: 'Grâce à OIJIH, mon magasin est désormais couvert par une multirisque professionnelle complète. L\'équipe est toujours disponible et à l\'écoute. Ils prennent le temps d\'expliquer chaque détail avec patience et clarté.' },
      ],
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes à votre écoute pour toute question ou demande de devis',
      firstName: 'Prénom',
      lastName: 'Nom',
      phone: 'Téléphone',
      email: 'Email',
      insuranceType: 'Type d\'assurance',
      message: 'Message',
      selectType: 'Sélectionnez un type',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.',
      error: 'Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter par téléphone.',
    },
    map: {
      title: 'Notre Agence',
      subtitle: 'Venez nous rencontrer dans nos locaux',
      openMaps: 'Ouvrir dans Google Maps',
      directions: 'Itinéraire',
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur nos services',
      items: [
        { q: 'Quels types d\'assurance proposez-vous ?', a: 'Nous proposons une gamme complète : assurance auto, habitation, multirisque, santé, entreprise et voyage. Chaque contrat est personnalisé selon vos besoins spécifiques et votre budget.' },
        { q: 'Combien de temps faut-il pour obtenir un devis ?', a: 'Nous nous engageons à vous répondre sous 24 heures. Dans la plupart des cas, vous recevez votre devis gratuit le jour même de votre demande.' },
        { q: 'Que faire en cas de sinistre ?', a: 'Contactez-nous immédiatement par téléphone ou WhatsApp. Notre équipe vous guide étape par étape et assure un suivi complet jusqu\'au règlement de votre dossier.' },
        { q: 'Proposez-vous des tarifs pour les entreprises ?', a: 'Oui, nous offrons des solutions sur mesure pour les professionnels et entreprises : multirisque professionnelle, flotte automobile, responsabilité civile et couverture des employés.' },
        { q: 'Quelles compagnies d\'assurance représentez-vous ?', a: 'Nous travaillons avec plus de 15 compagnies d\'assurance de premier plan au Maroc, ce qui nous permet de vous proposer les meilleures garanties aux tarifs les plus compétitifs.' },
      ],
    },
    footer: {
      slogan: 'Ce qui compte pour vous, compte pour nous',
      tagline: 'L\'assurance de votre sécurité',
      quickLinks: 'Liens Rapides',
      contactUs: 'Contact',
      rights: 'Tous droits réservés.',
    },
    whatsapp: {
      message: 'Bonjour, je souhaite obtenir un devis d\'assurance. Merci !',
    },
  },
  ar: {
    nav: {
      accueil: 'الرئيسية',
      services: 'الخدمات',
      avantages: 'المزايا',
      processus: 'المراحل',
      temoignages: 'آراء العملاء',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      cta: 'عرض مجاني',
    },
    hero: {
      headline1: 'أمانكم،',
      headline2: 'أولويتنا',
      subtext: 'تأمينات وجيه ترافقكم بخبرة وإخلاص لحماية ما يهمكم أكثر. حلول تأمين مصممة خصيصاً لتلبية احتياجاتكم.',
      btnDevis: 'طلب عرض مجاني',
      btnCall: 'اتصل بنا',
      stat1Val: '+500',
      stat1Label: 'عميل راضٍ',
      stat2Val: '+20',
      stat2Label: 'سنوات خبرة',
      stat3Val: '24س',
      stat3Label: 'رد سريع',
      stat4Val: '+15',
      stat4Label: 'شريك تأمين',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول تأمين شاملة لكل جانب من حياتكم',
      items: [
        { title: 'تأمين السيارة', desc: 'احموا مركبتكم بتغطية شاملة ضد الحوادث والسرقة وكسر الزجاج. قودوا بطمأنينة على طرقات المغرب بحماية تلائم احتياجاتكم.', cta: 'طلب عرض' },
        { title: 'تأمين السكن', desc: 'ؤوا منزلكم ضد مخاطر الحريق والسرقة وتلف المياه والكوارث الطبيعية. منزلكم يستحق أفضل حماية لراحتكم.', cta: 'طلب عرض' },
        { title: 'تأمين متعدد المخاطر', desc: 'تغطية شاملة تجمع عدة ضمانات في عقد واحد. مثالية للمهنيين والمؤسسات، تحمي محلاتكم وممتلكاتكم ومسؤولياتكم.', cta: 'طلب عرض' },
        { title: 'تأمين الصحة', desc: 'صلوا إلى أفضل الرعاية بتغطية صحية تناسب ميزانيتكم. الاستشفاء والاستشارات والرعاية المتخصصة والأدوية مشمولة.', cta: 'طلب عرض' },
        { title: 'تأمين المؤسسات', desc: 'ؤوا نشاطكم بحلول مهنية مصممة خصيصاً. المسؤولية المدنية المهنية والمحلات والموظفين وممتلكات المؤسسة وأسطول السيارات.', cta: 'طلب عرض' },
        { title: 'تأمين السفر', desc: 'سافروا مطمئنين بتأمين سفر شامل. الإلغاء وفقدان الأمتعة والمصاريف الطبية بالخارج والإعادة — تغطية عالمية.', cta: 'طلب عرض' },
      ],
    },
    why: {
      title: 'لماذا تختارنا ؟',
      subtitle: 'قيم تصنع الفرق في حمايتكم',
      items: [
        { title: 'الثقة', desc: 'بخبرة تتجاوز 20 سنة، نبني علاقات دائمة قائمة على الشفافية والصدق. عملاؤنا يأتمنوننا على أغلى ما يملكون، ونحن نكرم هذه الثقة كل يوم بالتزامنا الذي لا يتزعزع.' },
        { title: 'القرب', desc: 'متواجدون في قلب سلا، نحن بجانبكم في كل مرحلة. مستشار مخصص، متاح ومتفاعل، يفهم احتياجاتكم المحلية ويرافقكم شخصياً في جميع إجراءات التأمين.' },
        { title: 'الالتزام', desc: 'نلتزم بتقديم أفضل نسبة تغطية-سعر في السوق. في حالة حادث سينستر، تفاعلنا ومرافقتنا يصنعان الفرق لأخذ عهد سريع وفعال.' },
      ],
    },
    process: {
      title: 'كيف تعمل الخدمة ؟',
      subtitle: 'مسار بسيط وسريع لراحتكم',
      steps: [
        { title: 'تواصلوا معنا', desc: 'اتصلوا بنا أو أرسلوا بريداً إلكترونياً أو املؤوا استمارتنا. فريقنا متاح للإجابة على جميع أسئلتكم وفهم احتياجاتكم الخاصة.' },
        { title: 'التحليل والعرض', desc: 'يحلل خبراؤنا وضعكم ويقترحون أفضل حلول التأمين المناسبة لاحتياجاتكم وميزانيتكم، مع عرض مجاني وبدون التزام.' },
        { title: 'أنتم محميون', desc: 'بمجرد توقيع عقدكم، أنتم مؤمنون فوراً. نبقى بجانبكم لأي مرافقة وتدبير حادث طوال مدة عقدكم.' },
      ],
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'شهادات تتحدث عن نفسها',
      items: [
        { name: 'محمد ب.', role: 'مقاول بسلا', text: 'وجدت لي تأمينات وجيه التغطية المثالية لمؤسستي بسعر تنافسي جداً. تفاعلهم واحترافيتهم ملحوظان. أوصي بهم دون تردد لكل المقاولين.' },
        { name: 'فاطمة ز.', role: 'مالكة بالرباط', text: 'بعد حادث مياه، كانت تأمينات وجيه ذات فعالية مذهلة. في أقل من 48 ساعة، تمت معالجة ملفي ووصل التعويض. خدمة عملاء استثنائية تطمئنكم فعلاً.' },
        { name: 'أحمد ر.', role: 'تاجر بسلا', text: 'بفضل تأمينات وجيه، محلكي مغطى الآن بتأمين متعدد المخاطر المهنية الشامل. الفريق دائماً متاح ومصغٍ. يأخذون الوقت لشرح كل تفصيل بصبر ووضوح.' },
      ],
    },
    contact: {
      title: 'تواصلوا معنا',
      subtitle: 'نحن في استماعكم لأي سؤال أو طلب عرض',
      firstName: 'الاسم',
      lastName: 'النسب',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      insuranceType: 'نوع التأمين',
      message: 'الرسالة',
      selectType: 'اختروا نوع التأمين',
      send: 'إرسال',
      sending: 'جارٍ الإرسال...',
      success: 'تم إرسال الرسالة بنجاح ! سنرد عليكم خلال 24 ساعة.',
      error: 'خطأ في الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا هاتفياً.',
    },
    map: {
      title: 'وكالتنا',
      subtitle: 'تعالوا لقائنا في مقرنا',
      openMaps: 'فتح في خرائط جوجل',
      directions: 'الاتجاهات',
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاجون معرفته عن خدماتنا',
      items: [
        { q: 'ما هي أنواع التأمين التي تقدمونها؟', a: 'نقدم مجموعة شاملة: تأمين السيارة والسكن ومتعدد المخاطر والصحة والمؤسسات والسفر. كل عقد مخصص حسب احتياجاتكم وميزانيتكم.' },
        { q: 'كم يستغرق الحصول على عرض؟', a: 'نلتزم بالرد خلال 24 ساعة. في معظم الحالات، تتلقون عرضكم المجاني في نفس يوم طلبكم.' },
        { q: 'ماذا أفعل في حالة حادث؟', a: 'اتصلوا بنا فوراً هاتفياً أو عبر واتساب. فريقنا يرافقكم خطوة بخطوة ويضمن متابعة كاملة حتى تسوية ملفكم.' },
        { q: 'هل تقدمون أسعاراً للمؤسسات؟', a: 'نعم، نقدم حلولاً مخصصة للمهنيين والمؤسسات: التأمين متعدد المخاطر المهنية وأسطول السيارات والمسؤولية المدنية وتغطية الموظفين.' },
        { q: 'أي شركات تأمين تمثلون؟', a: 'نعمل مع أكثر من 15 شركة تأمين رائدة في المغرب، مما يتيح لنا تقديم أفضل الضمانات بأسعار تنافسية.' },
      ],
    },
    footer: {
      slogan: 'ما يهمكم، يهمنا',
      tagline: 'ضمانك وأمانك',
      quickLinks: 'روابط سريعة',
      contactUs: 'اتصل بنا',
      rights: 'جميع الحقوق محفوظة.',
    },
    whatsapp: {
      message: 'مرحباً، أرغب في الحصول على عرض تأمين مجاني. شكراً!',
    },
  },
};

/* ────────────────────────────── SVG Icons ────────────────────────────── */

const Icons = {
  car: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
      <circle cx="7" cy="17" r="2"/><path d="M9 17h6"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  ),
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  multirisque: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12h6"/><path d="M12 9v6"/>
    </svg>
  ),
  health: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  business: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  travel: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
    </svg>
  ),
  trust: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  proximity: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  commitment: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  linkedin: (
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
  ),
  arrowUp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  ),
  menu: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  arrowRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  externalLink: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
};

const serviceIcons = [Icons.car, Icons.home, Icons.multirisque, Icons.health, Icons.business, Icons.travel];
const whyIcons = [Icons.trust, Icons.proximity, Icons.commitment];
const processStepIcons = [Icons.phoneCall, Icons.searchDoc, Icons.shieldCheck];

const insuranceTypes = {
  fr: ['Assurance Auto', 'Assurance Habitation', 'Assurance Multirisque', 'Assurance Santé', 'Assurance Entreprise', 'Assurance Voyage'],
  ar: ['تأمين السيارة', 'تأمين السكن', 'تأمين متعدد المخاطر', 'تأمين الصحة', 'تأمين المؤسسات', 'تأمين السفر'],
};

/* ────────────────────────────── Animated Counter ────────────────────────────── */

function AnimatedCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <div ref={ref} className="hero-stat-card px-5 py-4 text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{count}{suffix}</div>
      <div className="text-white/60 text-xs sm:text-sm font-medium">{label}</div>
    </div>
  );
}

/* ────────────────────────────── Wave SVG Components ────────────────────────────── */

function WaveDivider({ color, flip }: { color: string; flip?: boolean }) {
  return (
    <div className={`absolute ${flip ? 'top-0 rotate-180' : 'bottom-0'} left-0 right-0 line-height-0 overflow-hidden pointer-events-none`} style={{ zIndex: 1 }}>
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
        <path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 56C672 64 768 64 864 56C960 48 1056 32 1152 28C1248 24 1344 32 1392 36L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V40Z" fill={color}/>
      </svg>
    </div>
  );
}

/* ────────────────────────────── FAQ Accordion Item ────────────────────────────── */

function FaqItem({ question, answer, isRTL, index }: { question: string; answer: string; isRTL: boolean; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border border-[#0D1F5C]/10 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'shadow-lg shadow-[#0D1F5C]/5 border-[#A8875A]/30' : 'hover:border-[#0D1F5C]/20'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${open ? 'bg-[#0D1F5C]/[0.03]' : 'hover:bg-[#0D1F5C]/[0.02]'}`}
      >
        <span className={`font-semibold text-[#0D1F5C] ${isRTL ? 'font-[var(--font-cairo)] text-right' : 'font-[var(--font-inter)]'} pr-4`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-[#A8875A] text-white rotate-180' : 'bg-[#0D1F5C]/5 text-[#0D1F5C]'}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className={`px-6 pb-5 text-[#0D1F5C]/70 leading-relaxed ${isRTL ? 'font-[var(--font-cairo)] text-right' : 'font-[var(--font-inter)]'}`}>
          {answer}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────── Main Component ────────────────────────────── */

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'ar'>('fr');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '', insuranceType: '', message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());

  const isRTL = lang === 'ar';
  const data = t[lang];

  // Scroll handling — progress bar, navbar, active section, back-to-top
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 20);
      setShowBackToTop(scrollTop > 600);

      const sections = ['hero', 'services', 'why', 'process', 'testimonials', 'faq', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // RTL/LTR + page title
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title = lang === 'fr'
      ? 'OIJIH Assurances – Courtier Assurance à Salé, Maroc | +20 Ans d\'Expérience | Devis Gratuit'
      : 'تأمينات وجيه – وكيل تأمين في سلا، المغرب | عرض مجاني';
  }, [lang, isRTL]);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealedSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const sections = document.querySelectorAll('.reveal');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [lang]);

  const scrollTo = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language: lang, date: new Date().toISOString() }),
      });
      setFormStatus('success');
      setFormData({ firstName: '', lastName: '', phone: '', email: '', insuranceType: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const whatsappLink = `https://wa.me/212662409860?text=${encodeURIComponent(data.whatsapp.message)}`;

  const navItems = [
    { key: 'accueil', target: 'hero' },
    { key: 'services', target: 'services' },
    { key: 'avantages', target: 'why' },
    { key: 'processus', target: 'process' },
    { key: 'temoignages', target: 'testimonials' },
    { key: 'faq', target: 'faq' },
    { key: 'contact', target: 'contact' },
  ];

  return (
    <div className={`page-load min-h-screen flex flex-col ${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-inter)]'}`}>

      {/* ══════ Scroll Progress Bar ══════ */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ══════ Navbar ══════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl py-2 shadow-sm' : 'bg-transparent py-3 md:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollTo('hero')} className="flex items-center group">
              <img
                src={scrolled ? '/logo.png' : '/logo-white.png'}
                alt="OIJIH Assurances"
                className={`h-16 md:h-24 w-auto transition-all duration-500 group-hover:scale-[1.03] ${!scrolled ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]' : ''}`}
              />
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.target)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.target
                      ? 'text-[#A8875A]'
                      : scrolled
                        ? 'text-[#0D1F5C] hover:text-[#A8875A]'
                        : 'text-white/80 hover:text-[#A8875A]'
                  }`}
                >
                  {data.nav[item.key as keyof typeof data.nav]}
                  {activeSection === item.target && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#A8875A] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className={`lang-switch ${!scrolled ? 'border-white/30 hover:border-white/50' : 'border-[#0D1F5C]/20 hover:border-[#A8875A]'}`}>
                <button onClick={() => setLang('fr')} className={`lang-btn ${lang === 'fr' ? 'lang-btn-active' : ''} ${!scrolled && lang !== 'fr' ? 'text-white/70' : ''}`}>FR</button>
                <button onClick={() => setLang('ar')} className={`lang-btn ${lang === 'ar' ? 'lang-btn-active' : ''} ${!scrolled && lang !== 'ar' ? 'text-white/70' : ''}`}>AR</button>
              </div>
              <button onClick={() => scrollTo('contact')} className="hidden md:inline-flex items-center gap-2 bg-[#A8875A] hover:bg-[#8C6F47] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#A8875A]/25 hover:-translate-y-0.5 active:translate-y-0">
                {data.nav.cta}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#0D1F5C] hover:text-[#A8875A]' : 'text-white hover:text-[#A8875A]'}`}>
                {mobileMenuOpen ? Icons.close : Icons.menu}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => scrollTo(item.target)} className={`block w-full text-left rtl:text-right py-3 px-4 rounded-xl font-medium transition-all ${activeSection === item.target ? 'text-[#A8875A] bg-[#A8875A]/5' : 'text-[#0D1F5C] hover:text-[#A8875A] hover:bg-[#A8875A]/5'}`}>
                {data.nav[item.key as keyof typeof data.nav]}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="w-full bg-[#A8875A] hover:bg-[#8C6F47] text-white px-5 py-3.5 rounded-xl text-sm font-semibold transition-all mt-2">{data.nav.cta}</button>
          </div>
        </div>
      </nav>

      {/* ══════ Hero ══════ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1F5C] hero-gradient" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 hero-particles" />

        {/* Floating decorative orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A8875A]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A8875A]/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />

        {/* Sparkle decorations */}
        <div className="sparkle" style={{ top: '15%', left: '10%', animationDelay: '0s' }} />
        <div className="sparkle" style={{ top: '25%', right: '15%', animationDelay: '1s' }} />
        <div className="sparkle" style={{ bottom: '30%', left: '20%', animationDelay: '2s' }} />
        <div className="sparkle" style={{ top: '40%', right: '25%', animationDelay: '0.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/10">
                <span className="w-2 h-2 bg-[#A8875A] rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">{lang === 'fr' ? 'L\'assurance de votre sécurité' : 'ضمانك وأمانك'}</span>
              </div>

              <h1 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6`}>
                <span className="animate-word-reveal inline-block" style={{ animationDelay: '0.2s' }}>{data.hero.headline1}</span>
                <br />
                <span className="gradient-text animate-word-reveal inline-block" style={{ animationDelay: '0.5s' }}>{data.hero.headline2}</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.7s' }}>
                {data.hero.subtext}
              </p>

              <div className="flex flex-wrap gap-4 mb-14 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 bg-[#A8875A] hover:bg-[#8C6F47] text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-[#A8875A]/30 hover:-translate-y-1 active:translate-y-0">
                  {data.hero.btnDevis}
                  <span className="rtl-flip">{Icons.arrowRight}</span>
                </button>
                <a href="tel:+212537838938" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20 hover:border-white/30">
                  {Icons.phone}
                  {data.hero.btnCall}
                </a>
              </div>

              {/* Stats — glassmorphism cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl animate-fade-in" style={{ animationDelay: '1.1s' }}>
                <AnimatedCounter end={500} suffix="+" label={data.hero.stat1Label} />
                <AnimatedCounter end={20} suffix="+" label={data.hero.stat2Label} />
                <div ref={null} className="hero-stat-card px-4 py-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">24h</div>
                  <div className="text-white/60 text-xs sm:text-sm font-medium">{data.hero.stat3Label}</div>
                </div>
                <AnimatedCounter end={15} suffix="+" label={data.hero.stat4Label} />
              </div>
            </div>

            {/* Hero Logo */}
            <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <img src="/logo-navy.png" alt="OIJIH Assurances" className="w-[340px] md:w-[420px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-float rounded-2xl" />
                <div className="absolute inset-0 bg-[#A8875A]/8 rounded-2xl blur-3xl scale-110 -z-10" />
              </div>
            </div>
          </div>
        </div>

        <WaveDivider color="#F8F7F4" />
      </section>

      {/* ══════ Services ══════ */}
      <section id="services" className="py-20 md:py-28 bg-[#F8F7F4] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('services') ? 'visible' : ''}`} id="services-reveal">
            <div className="text-center mb-16">
              <span className="inline-block text-[#A8875A] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Nos Expertises' : 'خبراتنا'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>{data.services.title}</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.services.subtitle}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data.services.items.map((item, i) => (
              <div key={i} className={`reveal glass-card gradient-border rounded-2xl p-7 md:p-8 group ${revealedSections.has('services') ? 'visible' : ''}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="icon-container mb-6">{serviceIcons[i]}</div>
                <h3 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-xl font-bold text-[#0D1F5C] mb-3`}>{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{item.desc}</p>
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 text-[#A8875A] font-semibold text-sm group-hover:gap-3 transition-all">
                  {item.cta}
                  <span className="rtl-flip transition-transform group-hover:translate-x-1">{Icons.arrowRight}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Why Us ══════ */}
      <section id="why" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('why') ? 'visible' : ''}`} id="why-reveal">
            <div className="text-center mb-16">
              <span className="inline-block text-[#A8875A] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Nos Valeurs' : 'قيمنا'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>{data.why.title}</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.why.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.why.items.map((item, i) => (
              <div key={i} className={`reveal tilt-card bg-white rounded-2xl p-8 md:p-10 text-center shadow-lg shadow-[#0D1F5C]/5 border border-[#E5E7EB]/50 hover:border-[#A8875A]/30 ${revealedSections.has('why') ? 'visible' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#0D1F5C]/[0.04] text-[#A8875A] mb-6 transition-all group-hover:bg-[#A8875A]/10 group-hover:scale-110">
                  {whyIcons[i]}
                </div>
                <h3 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-2xl font-bold text-[#0D1F5C] mb-4`}>{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Process ══════ */}
      <section id="process" className="py-24 md:py-32 bg-[#0D1F5C] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#A8875A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8875A]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('process') ? 'visible' : ''}`} id="process-reveal">
            <div className="text-center mb-16">
              <span className="inline-block text-[#A8875A] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Étapes Simples' : 'خطوات بسيطة'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4`}>{data.process.title}</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{data.process.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Animated connector line */}
            <div className="hidden md:block absolute top-[88px] left-[20%] right-[20%] h-[2px]">
              <div className={`h-full bg-gradient-to-r from-[#A8875A]/30 via-[#A8875A] to-[#A8875A]/30 ${revealedSections.has('process') ? 'animate-draw-line' : ''}`} />
            </div>

            {data.process.steps.map((step, i) => (
              <div key={i} className={`reveal relative text-center ${revealedSections.has('process') ? 'visible' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="relative z-10 inline-flex items-center justify-center w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#A8875A] bg-[#0D1F5C] text-white mb-6 mx-auto shadow-2xl shadow-[#A8875A]/15 step-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                  <span className="text-4xl md:text-5xl font-bold text-[#A8875A]">{`0${i + 1}`}</span>
                </div>
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#A8875A]/10 border border-[#A8875A]/20 text-[#A8875A] flex items-center justify-center">{processStepIcons[i]}</div>
                </div>
                <h3 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-xl font-bold text-white mb-3`}>{step.title}</h3>
                <p className="text-white/60 leading-relaxed max-w-sm mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Testimonials ══════ */}
      <section id="testimonials" className="py-20 md:py-28 bg-[#0D1F5C] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#A8875A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8875A]/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('testimonials') ? 'visible' : ''}`} id="testimonials-reveal">
            <div className="text-center mb-16">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4`}>{data.testimonials.title}</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{data.testimonials.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.items.map((item, i) => (
              <div key={i} className={`reveal testimonial-card glass-card-dark rounded-2xl p-8 ${revealedSections.has('testimonials') ? 'visible' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex gap-1 text-[#A8875A] mb-5">
                  {[...Array(5)].map((_, j) => (<span key={j}>{Icons.star}</span>))}
                </div>
                <p className="text-white/80 leading-relaxed mb-8 text-sm">{item.text}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/15">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A8875A] to-[#8C6F47] flex items-center justify-center text-white shadow-lg overflow-hidden">{Icons.person}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.name}</div>
                    <div className="text-white/50 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Contact ══════ */}
      <section id="contact" className="py-20 md:py-28 bg-[#F8F7F4] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('contact') ? 'visible' : ''}`} id="contact-reveal">
            <div className="text-center mb-16">
              <span className="inline-block text-[#A8875A] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Écrivez-nous' : 'اكتبوا لنا'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>{data.contact.title}</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.contact.subtitle}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className={`lg:col-span-3 reveal ${revealedSections.has('contact') ? 'visible' : ''}`}>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-10 shadow-xl shadow-[#0D1F5C]/5 border border-[#E5E7EB]/50">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="form-field">
                    <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder=" " dir="auto" />
                    <label>{data.contact.firstName}</label>
                  </div>
                  <div className="form-field">
                    <input type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder=" " dir="auto" />
                    <label>{data.contact.lastName}</label>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="form-field">
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder=" " dir="ltr" />
                    <label>{data.contact.phone}</label>
                  </div>
                  <div className="form-field">
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder=" " dir="ltr" />
                    <label>{data.contact.email}</label>
                  </div>
                </div>
                <div className="form-field mb-5">
                  <select required value={formData.insuranceType} onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })} className={formData.insuranceType ? 'has-value' : ''}>
                    <option value="">{data.contact.selectType}</option>
                    {insuranceTypes[lang].map((type, i) => (<option key={i} value={type}>{type}</option>))}
                  </select>
                  <label>{data.contact.insuranceType}</label>
                </div>
                <div className="form-field mb-6">
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder=" " />
                  <label>{data.contact.message}</label>
                </div>
                <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-[#0D1F5C] hover:bg-[#162572] text-white py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-[#0D1F5C]/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base">
                  {formStatus === 'sending' ? (
                    <><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>{data.contact.sending}</>
                  ) : (<>{data.contact.send}<span className="rtl-flip">{Icons.arrowRight}</span></>)}
                </button>
                {formStatus === 'success' && (<div className="mt-4 p-4 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-medium text-center flex items-center justify-center gap-2">{Icons.check} {data.contact.success}</div>)}
                {formStatus === 'error' && (<div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium text-center">{data.contact.error}</div>)}
              </form>
            </div>

            <div className={`lg:col-span-2 reveal ${revealedSections.has('contact') ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="space-y-5">
                {[
                  { href: 'tel:+212662409860', label: lang === 'fr' ? 'Téléphone Personnel' : 'هاتف شخصي', value: '06 62 40 98 60', icon: Icons.phone },
                  { href: 'tel:+212537838938', label: lang === 'fr' ? 'Téléphone Agence' : 'هاتف الوكالة', value: '05 37 83 89 38', icon: Icons.phone },
                  { href: 'mailto:oijih.assurance25@gmail.com', label: data.contact.email, value: 'oijih.assurance25@gmail.com', icon: Icons.email },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-4 p-5 bg-white rounded-xl hover:bg-[#0D1F5C]/[0.02] transition-all group border border-transparent hover:border-[#A8875A]/20 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#0D1F5C] text-[#A8875A] flex items-center justify-center shrink-0 group-hover:bg-[#A8875A] group-hover:text-[#0D1F5C] transition-all shadow-sm">{item.icon}</div>
                    <div>
                      <div className="text-sm text-[#6B7280] mb-1">{item.label}</div>
                      <div className="text-[#0D1F5C] font-semibold text-sm" dir="ltr">{item.value}</div>
                    </div>
                  </a>
                ))}

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-transparent hover:border-[#A8875A]/20 transition-all shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#0D1F5C] text-[#A8875A] flex items-center justify-center shrink-0 shadow-sm">{Icons.location}</div>
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1">{lang === 'fr' ? 'Adresse' : 'العنوان'}</div>
                    <div className="text-[#0D1F5C] font-semibold text-sm leading-relaxed">
                      {lang === 'fr' ? 'N°960, Lotissement Sidi Abdellah, Secteur Al Fath, Laayayda, Salé, Maroc' : 'رقم 960، تجزئة سيدي عبد الله، قطاع الفتح، العيايدة، سلا، المغرب'}
                    </div>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 bg-[#25D366]/10 rounded-xl text-[#25D366] font-semibold hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20">
                  {Icons.whatsapp}
                  {lang === 'fr' ? 'Écrivez-nous sur WhatsApp' : 'راسلونا على واتساب'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ Google Maps ══════ */}
      <section id="map" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('map') ? 'visible' : ''}`} id="map-reveal">
            <div className="text-center mb-12">
              <span className="inline-block text-[#A8875A] font-semibold text-sm tracking-wider uppercase mb-3">{lang === 'fr' ? 'Localisation' : 'الموقع'}</span>
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>{data.map.title}</h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.map.subtitle}</p>
            </div>
          </div>
          <div className={`reveal ${revealedSections.has('map') ? 'visible' : ''}`}>
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.5!2d-6.7985!3d34.0531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzExLjIiTiA2wrA0Nyc1NC42Ilc!5e0!3m2!1sfr!2sma!4v1" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="OIJIH Assurances Location" className="w-full" />
            </div>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <a href="https://www.google.com/maps/search/?api=1&query=34.0531,-6.7985" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0D1F5C] hover:bg-[#162572] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-xl hover:shadow-[#0D1F5C]/20 hover:-translate-y-0.5">{Icons.externalLink}{data.map.openMaps}</a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=34.0531,-6.7985" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#A8875A] hover:bg-[#8C6F47] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-xl hover:shadow-[#A8875A]/20 hover:-translate-y-0.5">{Icons.location}{data.map.directions}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ Footer ══════ */}
      <footer className="bg-[#0D1F5C] pt-16 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-1">
              <img src="/logo-white.png" alt="OIJIH Assurances" className="h-16 md:h-20 w-auto mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" />
              <p className="text-white/60 text-sm leading-relaxed mb-2">{data.footer.slogan}</p>
              <p className="text-[#A8875A] font-semibold text-sm">{data.footer.tagline}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#A8875A] mb-5 text-sm tracking-wider uppercase">{data.footer.quickLinks}</h4>
              <ul className="space-y-3">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.key}><button onClick={() => scrollTo(item.target)} className="footer-link text-white/50 hover:text-[#A8875A] text-sm transition-all">{data.nav[item.key as keyof typeof data.nav]}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#A8875A] mb-5 text-sm tracking-wider uppercase">{data.footer.contactUs}</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:+212662409860" className="flex items-center gap-3 text-white/50 hover:text-[#A8875A] transition-colors" dir="ltr"><span className="text-[#A8875A]">{Icons.phone}</span> 06 62 40 98 60</a>
                <a href="tel:+212537838938" className="flex items-center gap-3 text-white/50 hover:text-[#A8875A] transition-colors" dir="ltr"><span className="text-[#A8875A]">{Icons.phone}</span> 05 37 83 89 38</a>
                <a href="mailto:oijih.assurance25@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-[#A8875A] transition-colors" dir="ltr"><span className="text-[#A8875A]">{Icons.email}</span> oijih.assurance25@gmail.com</a>
                <div className="flex items-start gap-3 text-white/50 pt-1">
                  <span className="text-[#A8875A] mt-0.5">{Icons.location}</span>
                  <span className="text-xs leading-relaxed">{lang === 'fr' ? 'N°960, Lot. Sidi Abdellah, Al Fath, Laayayda, Salé' : 'رقم 960، تجزئة سيدي عبد الله، الفتح، العيايدة، سلا'}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#A8875A] mb-5 text-sm tracking-wider uppercase">{lang === 'fr' ? 'Suivez-nous' : 'تابعونا'}</h4>
              <div className="flex gap-3">
                {[Icons.facebook, Icons.instagram, Icons.linkedin].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#A8875A] flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110 border border-white/[0.06] hover:border-[#A8875A]">{icon}</a>
                ))}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#25D366] flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110 border border-white/[0.06] hover:border-[#25D366]">{Icons.whatsapp}</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {(lang === 'fr' ? ['Confiance', 'Proximité', 'Engagement'] : ['الثقة', 'القرب', 'الالتزام']).map((v, i) => (
                  <span key={i} className="text-xs bg-white/[0.06] text-[#A8875A] px-3 py-1.5 rounded-full border border-white/[0.06]">{v}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} OIJIH Assurances / تأمينات وجيه. {data.footer.rights}</p>
            <p className="text-white/20 text-xs">{lang === 'fr' ? 'Courtier d\'assurance agréé à Salé, Maroc' : 'وكيل تأمين معتمد في سلا، المغرب'}</p>
          </div>
        </div>
      </footer>

      {/* ══════ Floating WhatsApp ══════ */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn fixed bottom-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#25D366]/30" style={{ [isRTL ? 'left' : 'right']: '1.5rem' }} aria-label="WhatsApp">
        {Icons.whatsapp}
      </a>

      {/* ══════ Back to Top ══════ */}
      {showBackToTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top fixed bottom-24 z-50 w-12 h-12 bg-[#A8875A] hover:bg-[#8C6F47] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#A8875A]/30" style={{ [isRTL ? 'left' : 'right']: '1.75rem' }} aria-label="Back to top">
          {Icons.arrowUp}
        </button>
      )}
    </div>
  );
}
