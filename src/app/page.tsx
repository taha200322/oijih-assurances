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
      stat2Val: '10+',
      stat2Label: 'Ans d\'Expérience',
      stat3Val: '24h',
      stat3Label: 'Réponse Rapide',
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Des solutions d\'assurance complètes pour chaque aspect de votre vie',
      items: [
        { title: 'Assurance Auto', desc: 'Protégez votre véhicule avec une couverture complète. Accidents, vol, bris de glace — roulez en toute sérénité sur les routes du Maroc.', cta: 'Demander un devis' },
        { title: 'Assurance Habitation', desc: 'Sécurisez votre foyer contre les risques d\'incendie, de vol et de catastrophes naturelles. Votre maison mérite la meilleure protection.', cta: 'Demander un devis' },
        { title: 'Famille & Vie', desc: 'Assurez l\'avenir de vos proches avec nos solutions d\'assurance vie et familiale. Prévoyance et tranquillité d\'esprit pour vos enfants.', cta: 'Demander un devis' },
        { title: 'Assurance Santé', desc: 'Accédez aux meilleurs soins avec une couverture santé adaptée. Hospitalisation, consultations et soins spécialisés pris en charge.', cta: 'Demander un devis' },
        { title: 'Assurance Entreprise', desc: 'Protégez votre activité avec des solutions professionnelles sur mesure. Responsabilité civile, locaux, employés et biens d\'entreprise.', cta: 'Demander un devis' },
        { title: 'Assurance Voyage', desc: 'Voyagez l\'esprit libre avec une assurance voyage complète. Annulation, bagages, frais médicaux à l\'étranger — couverture mondiale.', cta: 'Demander un devis' },
      ],
    },
    why: {
      title: 'Pourquoi Nous Choisir ?',
      subtitle: 'Des valeurs qui font la différence dans votre protection',
      items: [
        { title: 'Confiance', desc: 'Depuis plus de 10 ans, nous bâtissons des relations durables fondées sur la transparence et l\'honnêteté. Nos clients nous confient ce qu\'ils ont de plus précieux, et nous honorons cette confiance chaque jour par notre engagement sans faille.' },
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
        { name: 'Ahmed R.', role: 'Famille à Salé', text: 'Nous avons souscrit une assurance familiale complète et nous sommes ravis du service. L\'équipe est toujours disponible et à l\'écoute. Ils prennent le temps d\'expliquer chaque détail avec patience et clarté.' },
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
      stat2Val: '+10',
      stat2Label: 'سنوات خبرة',
      stat3Val: '24س',
      stat3Label: 'رد سريع',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول تأمين شاملة لكل جانب من حياتكم',
      items: [
        { title: 'تأمين السيارة', desc: 'احموا مركبتكم بتغطية شاملة. حوادث، سرقة، كسر زجاج — قودوا بطمأنينة على طرقات المغرب.', cta: 'طلب عرض' },
        { title: 'تأمين السكن', desc: 'ؤوا منزلكم ضد مخاطر الحريق والسرقة والكوارث الطبيعية. منزلكم يستحق أفضل حماية.', cta: 'طلب عرض' },
        { title: 'العائلة والحياة', desc: 'ؤوا مستقبل أحبائكم بحلول تأمين الحياة والعائلة. توقع وراحة بال لأبنائكم.', cta: 'طلب عرض' },
        { title: 'تأمين الصحة', desc: 'صلوا إلى أفضل الرعاية بتغطية صحية مناسبة. الاستشفاء والاستشارات والرعاية المتخصصة مشمولة.', cta: 'طلب عرض' },
        { title: 'تأمين المؤسسات', desc: 'ؤوا نشاطكم بحلول مهنية مصممة خصيصاً. المسؤولية المدنية والمحلات والموظفين وممتلكات المؤسسة.', cta: 'طلب عرض' },
        { title: 'تأمين السفر', desc: 'سافروا مطمئنين بتأمين سفر شامل. الإلغاء والأمتعة والمصاريف الطبية بالخارج — تغطية عالمية.', cta: 'طلب عرض' },
      ],
    },
    why: {
      title: 'لماذا تختارنا ؟',
      subtitle: 'قيم تصنع الفرق في حمايتكم',
      items: [
        { title: 'الثقة', desc: 'منذ أكثر من 10 سنوات، نبني علاقات دائمة قائمة على الشفافية والصدق. عملاؤنا يأتمنوننا على أغلى ما يملكون، ونحن نكرم هذه الثقة كل يوم بالتزامنا الذي لا يتزعزع.' },
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
        { name: 'أحمد ر.', role: 'عائلة بسلا', text: 'اشتركنا في تأمين عائلي شامل ونحن سعداء بالخدمة. الفريق دائماً متاح ومصغٍ. يأخذون الوقت لشرح كل تفصيل بصبر ووضوح.' },
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
  family: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
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

const serviceIcons = [Icons.car, Icons.home, Icons.family, Icons.health, Icons.business, Icons.travel];
const whyIcons = [Icons.trust, Icons.proximity, Icons.commitment];

/* ────────────────────────────── Insurance Types ────────────────────────────── */

const insuranceTypes = {
  fr: ['Assurance Auto', 'Assurance Habitation', 'Famille & Vie', 'Assurance Santé', 'Assurance Entreprise', 'Assurance Voyage'],
  ar: ['تأمين السيارة', 'تأمين السكن', 'العائلة والحياة', 'تأمين الصحة', 'تأمين المؤسسات', 'تأمين السفر'],
};

/* ────────────────────────────── Main Component ────────────────────────────── */

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'ar'>('fr');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    insuranceType: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());

  const isRTL = lang === 'ar';
  const data = t[lang];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle RTL/LTR
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [lang]);

  // Smooth scroll to section
  const scrollTo = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Form handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Google Apps Script Web App URL - Replace with your deployment URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        insuranceType: formData.insuranceType,
        message: formData.message,
        language: lang,
        date: new Date().toISOString(),
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setFormStatus('success');
      setFormData({ firstName: '', lastName: '', phone: '', email: '', insuranceType: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  // WhatsApp link
  const whatsappLink = `https://wa.me/212660385429?text=${encodeURIComponent(data.whatsapp.message)}`;

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-inter)]'}`}>
      {/* ──────── Navbar ──────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass-scrolled py-2' : 'nav-glass py-3 md:py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
              <img src="/logo.png" alt="OIJIH Assurances" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { key: 'accueil', target: 'hero' },
                { key: 'services', target: 'services' },
                { key: 'avantages', target: 'why' },
                { key: 'processus', target: 'process' },
                { key: 'temoignages', target: 'testimonials' },
                { key: 'contact', target: 'contact' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.target)}
                  className="text-sm font-medium text-[#0D1F5C] hover:text-[#C9A84C] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A84C] after:transition-all hover:after:w-full"
                >
                  {data.nav[item.key as keyof typeof data.nav]}
                </button>
              ))}
            </div>

            {/* Right side: Language + CTA */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="lang-switch">
                <button
                  onClick={() => setLang('fr')}
                  className={`lang-btn ${lang === 'fr' ? 'lang-btn-active' : ''}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('ar')}
                  className={`lang-btn ${lang === 'ar' ? 'lang-btn-active' : ''}`}
                >
                  AR
                </button>
              </div>

              {/* Desktop CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className="hidden md:inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B08F35] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#C9A84C]/20"
              >
                {data.nav.cta}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#0D1F5C]"
              >
                {mobileMenuOpen ? Icons.close : Icons.menu}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { key: 'accueil', target: 'hero' },
              { key: 'services', target: 'services' },
              { key: 'avantages', target: 'why' },
              { key: 'processus', target: 'process' },
              { key: 'temoignages', target: 'testimonials' },
              { key: 'contact', target: 'contact' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.target)}
                className="block w-full text-left rtl:text-right py-2 text-[#0D1F5C] hover:text-[#C9A84C] font-medium transition-colors"
              >
                {data.nav[item.key as keyof typeof data.nav]}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="w-full bg-[#C9A84C] hover:bg-[#B08F35] text-white px-5 py-3 rounded-full text-sm font-semibold transition-all"
            >
              {data.nav.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* ──────── Hero ──────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0D1F5C] hero-gradient hero-pattern" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">{lang === 'fr' ? 'L\'assurance de votre sécurité' : 'ضمانك وأمانك'}</span>
              </div>

              <h1 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6`}>
                {data.hero.headline1}
                <br />
                <span className="gradient-text">{data.hero.headline2}</span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                {data.hero.subtext}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B08F35] text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-[#C9A84C]/25 hover:-translate-y-0.5"
                >
                  {data.hero.btnDevis}
                  <span className="rtl-flip">{Icons.arrowRight}</span>
                </button>
                <a
                  href="tel:+212537838938"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
                >
                  {Icons.phone}
                  {data.hero.btnCall}
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { val: data.hero.stat1Val, label: data.hero.stat1Label },
                  { val: data.hero.stat2Val, label: data.hero.stat2Label },
                  { val: data.hero.stat3Val, label: data.hero.stat3Label },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.val}</div>
                    <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo Display */}
            <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#C9A84C]/10 rounded-3xl blur-2xl scale-110" />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 animate-float">
                  <img src="/logo.png" alt="OIJIH Assurances" className="w-80 h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.8C672 46.3 768 57.7 864 58.8C960 60 1056 51 1152 46.2C1248 41.3 1344 40.7 1392 40.3L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ──────── Services ──────── */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('services') ? 'visible' : ''}`} id="services-reveal">
            <div className="text-center mb-16">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>
                {data.services.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.services.subtitle}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data.services.items.map((item, i) => (
              <div
                key={i}
                className={`reveal card-hover bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 group ${revealedSections.has('services') ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="icon-container mb-5">{serviceIcons[i]}</div>
                <h3 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-xl font-bold text-[#0D1F5C] mb-3`}>
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{item.desc}</p>
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:gap-3 transition-all"
                >
                  {item.cta}
                  <span className="rtl-flip">{Icons.arrowRight}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── Why Us ──────── */}
      <section id="why" className="py-20 md:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('why') ? 'visible' : ''}`} id="why-reveal">
            <div className="text-center mb-16">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>
                {data.why.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.why.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.why.items.map((item, i) => (
              <div
                key={i}
                className={`reveal card-hover bg-white rounded-2xl p-8 md:p-10 text-center shadow-sm ${revealedSections.has('why') ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0D1F5C]/5 text-[#C9A84C] mb-6 transition-all group-hover:bg-[#C9A84C]/10">
                  {whyIcons[i]}
                </div>
                <h3 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-2xl font-bold text-[#0D1F5C] mb-4`}>
                  {item.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── How It Works ──────── */}
      <section id="process" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('process') ? 'visible' : ''}`} id="process-reveal">
            <div className="text-center mb-16">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>
                {data.process.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.process.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector lines (desktop only) */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-[#C9A84C]/30 via-[#C9A84C] to-[#C9A84C]/30" />

            {data.process.steps.map((step, i) => (
              <div
                key={i}
                className={`reveal relative text-center ${revealedSections.has('process') ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="relative z-10 inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#0D1F5C] text-white mb-8 mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">{`0${i + 1}`}</div>
                    <div className="mt-1 text-[#C9A84C]">
                      {Icons.check}
                    </div>
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
      </section>

      {/* ──────── Testimonials ──────── */}
      <section id="testimonials" className="py-20 md:py-28 bg-[#0D1F5C] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('testimonials') ? 'visible' : ''}`} id="testimonials-reveal">
            <div className="text-center mb-16">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4`}>
                {data.testimonials.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{data.testimonials.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.items.map((item, i) => (
              <div
                key={i}
                className={`reveal testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/10 ${revealedSections.has('testimonials') ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#C9A84C] mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>{Icons.star}</span>
                  ))}
                </div>

                <p className="text-white/80 leading-relaxed mb-6 text-sm">{item.text}</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{item.name}</div>
                    <div className="text-white/50 text-sm">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── Contact ──────── */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('contact') ? 'visible' : ''}`} id="contact-reveal">
            <div className="text-center mb-16">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>
                {data.contact.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.contact.subtitle}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className={`lg:col-span-3 reveal ${revealedSections.has('contact') ? 'visible' : ''}`}>
              <form onSubmit={handleSubmit} className="bg-[#F8F7F4] rounded-2xl p-6 md:p-10">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0D1F5C] mb-2">{data.contact.firstName}</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0D1F5C] text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0D1F5C] mb-2">{data.contact.lastName}</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0D1F5C] text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0D1F5C] mb-2">{data.contact.phone}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0D1F5C] text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0D1F5C] mb-2">{data.contact.email}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0D1F5C] text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-[#0D1F5C] mb-2">{data.contact.insuranceType}</label>
                  <select
                    required
                    value={formData.insuranceType}
                    onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0D1F5C] text-sm transition-all appearance-none"
                  >
                    <option value="">{data.contact.selectType}</option>
                    {insuranceTypes[lang].map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#0D1F5C] mb-2">{data.contact.message}</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0D1F5C] text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-[#0D1F5C] hover:bg-[#162572] text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      {data.contact.sending}
                    </>
                  ) : (
                    data.contact.send
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium text-center">
                    {Icons.check} {data.contact.success}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium text-center">
                    {data.contact.error}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className={`lg:col-span-2 reveal ${revealedSections.has('contact') ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                {/* Phone Personnel */}
                <a href="tel:+212662409860" className="flex items-start gap-4 p-5 bg-[#F8F7F4] rounded-xl hover:bg-[#0D1F5C]/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0D1F5C] text-[#C9A84C] flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#0D1F5C] transition-all">
                    {Icons.phone}
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1">{lang === 'fr' ? 'Téléphone Personnel' : 'هاتف شخصي'}</div>
                    <div className="text-[#0D1F5C] font-semibold" dir="ltr">06 62 40 98 60</div>
                  </div>
                </a>

                {/* Phone Agence */}
                <a href="tel:+212537838938" className="flex items-start gap-4 p-5 bg-[#F8F7F4] rounded-xl hover:bg-[#0D1F5C]/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0D1F5C] text-[#C9A84C] flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#0D1F5C] transition-all">
                    {Icons.phone}
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1">{lang === 'fr' ? 'Téléphone Agence' : 'هاتف الوكالة'}</div>
                    <div className="text-[#0D1F5C] font-semibold" dir="ltr">05 37 83 89 38</div>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:oijih.assurance25@gmail.com" className="flex items-start gap-4 p-5 bg-[#F8F7F4] rounded-xl hover:bg-[#0D1F5C]/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0D1F5C] text-[#C9A84C] flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#0D1F5C] transition-all">
                    {Icons.email}
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1">{data.contact.email}</div>
                    <div className="text-[#0D1F5C] font-semibold text-sm">oijih.assurance25@gmail.com</div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-[#F8F7F4] rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#0D1F5C] text-[#C9A84C] flex items-center justify-center shrink-0">
                    {Icons.location}
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280] mb-1">{lang === 'fr' ? 'Adresse' : 'العنوان'}</div>
                    <div className="text-[#0D1F5C] font-semibold text-sm">
                      {lang === 'fr'
                        ? 'N°960, Lotissement Sidi Abdellah, Secteur Al Fath, Laayayda, Salé, Maroc'
                        : 'رقم 960، تجزئة سيدي عبد الله، قطاع الفتح، العيايدة، سلا، المغرب'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Google Maps ──────── */}
      <section id="map" className="py-20 md:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`reveal ${revealedSections.has('map') ? 'visible' : ''}`} id="map-reveal">
            <div className="text-center mb-12">
              <h2 className={`${isRTL ? 'font-[var(--font-cairo)]' : 'font-[var(--font-playfair)]'} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1F5C] mb-4`}>
                {data.map.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{data.map.subtitle}</p>
            </div>
          </div>

          <div className={`reveal ${revealedSections.has('map') ? 'visible' : ''}`}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.5!2d-6.7985!3d34.0531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzExLjIiTiA2wrA0Nyc1NC42Ilc!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OIJIH Assurances Location"
                className="w-full"
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=34.0531,-6.7985"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0D1F5C] hover:bg-[#162572] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
              >
                {Icons.externalLink}
                {data.map.openMaps}
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=34.0531,-6.7985"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B08F35] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
              >
                {Icons.location}
                {data.map.directions}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Footer ──────── */}
      <footer className="bg-[#0D1F5C] pt-16 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Logo & Slogan */}
            <div className="lg:col-span-1">
              <img src="/logo.png" alt="OIJIH Assurances" className="h-14 w-auto mb-4 brightness-0 invert" />
              <p className="text-white/70 text-sm leading-relaxed mb-2">{data.footer.slogan}</p>
              <p className="text-[#C9A84C] font-semibold text-sm">{data.footer.tagline}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#C9A84C] mb-4">{data.footer.quickLinks}</h4>
              <ul className="space-y-3">
                {[
                  { key: 'accueil', target: 'hero' },
                  { key: 'services', target: 'services' },
                  { key: 'avantages', target: 'why' },
                  { key: 'processus', target: 'process' },
                  { key: 'contact', target: 'contact' },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => scrollTo(item.target)}
                      className="footer-link text-white/60 hover:text-[#C9A84C] text-sm transition-all"
                    >
                      {data.nav[item.key as keyof typeof data.nav]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[#C9A84C] mb-4">{data.footer.contactUs}</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:+212662409860" className="flex items-center gap-2 text-white/60 hover:text-[#C9A84C] transition-colors" dir="ltr">
                  {Icons.phone} 06 62 40 98 60
                </a>
                <a href="tel:+212537838938" className="flex items-center gap-2 text-white/60 hover:text-[#C9A84C] transition-colors" dir="ltr">
                  {Icons.phone} 05 37 83 89 38
                </a>
                <a href="mailto:oijih.assurance25@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-[#C9A84C] transition-colors">
                  {Icons.email} oijih.assurance25@gmail.com
                </a>
                <div className="flex items-start gap-2 text-white/60">
                  {Icons.location}
                  <span className="text-xs leading-relaxed">
                    {lang === 'fr'
                      ? 'N°960, Lot. Sidi Abdellah, Al Fath, Laayayda, Salé'
                      : 'رقم 960، تجزئة سيدي عبد الله، الفتح، العيايدة، سلا'}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-[#C9A84C] mb-4">{lang === 'fr' ? 'Suivez-nous' : 'تابعونا'}</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center text-white/70 hover:text-white transition-all">
                  {Icons.facebook}
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center text-white/70 hover:text-white transition-all">
                  {Icons.instagram}
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center text-white/70 hover:text-white transition-all">
                  {Icons.linkedin}
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white/70 hover:text-white transition-all">
                  {Icons.whatsapp}
                </a>
              </div>

              {/* Values */}
              <div className="mt-6 flex flex-wrap gap-2">
                {(lang === 'fr' ? ['Confiance', 'Proximité', 'Engagement'] : ['الثقة', 'القرب', 'الالتزام']).map((v, i) => (
                  <span key={i} className="text-xs bg-white/10 text-[#C9A84C] px-3 py-1.5 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} OIJIH Assurances / تأمينات وجيه. {data.footer.rights}
            </p>
            <p className="text-white/30 text-xs">
              {lang === 'fr' ? 'Courtier d\'assurance agréé à Salé, Maroc' : 'وكيل تأمين معتمد في سلا، المغرب'}
            </p>
          </div>
        </div>
      </footer>

      {/* ──────── Floating WhatsApp Button ──────── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30"
        aria-label="WhatsApp"
      >
        {Icons.whatsapp}
      </a>
    </div>
  );
}
