/* ════════════════════════════════════════════════════════════════
   OIJIH Assurances — ALL business info in ONE place.
   To change a phone, the hours, or the Pixel ID: edit ONLY this file.
   ════════════════════════════════════════════════════════════════ */

export const site = {
  name: 'OIJIH Assurances',
  nameAr: 'تأمينات وجيه',
  url: 'https://oijihassurances.com',

  // Phones (display format + international format for links)
  phoneMobile: { display: '06 62 40 98 60', intl: '+212662409860' },
  phoneAgence: { display: '05 37 83 89 38', intl: '+212537838938' },
  // Number used by the big "Appeler" buttons
  callPrimary: { display: '06 62 40 98 60', intl: '+212662409860' },

  // WhatsApp (digits only, with 212, no + and no spaces)
  whatsapp: '212660385429',
  whatsappDisplay: '06 60 38 54 29',

  email: 'oijih.assurance25@gmail.com',

  address: {
    fr: 'N°960, Lotissement Sidi Abdellah, Secteur Al Fath, Laayayda, Salé',
    ar: 'رقم 960، تجزئة سيدي عبد الله، قطاع الفتح، العيايدة، سلا',
    street: 'N°960, Lotissement Sidi Abdellah, Secteur Al Fath, Laayayda',
    city: 'Salé',
    postalCode: '11000',
  },

  // Google Maps
  mapsLink: 'https://maps.app.goo.gl/id19qjZmhJmygpax8',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=OIJIH+Assurances+Sal%C3%A9',
  mapsEmbed: 'https://maps.google.com/maps?q=OIJIH+Assurances,+Laayayda,+Sal%C3%A9,+Maroc&z=16&output=embed',

  // Opening hours — ⚠️ CONFIRM these with your dad
  hours: {
    fr: [
      { days: 'Lundi – Vendredi', time: '09:00 – 18:00' },
      { days: 'Samedi', time: '09:00 – 13:00' },
      { days: 'Dimanche', time: 'Fermé' },
    ],
    ar: [
      { days: 'الإثنين – الجمعة', time: '09:00 – 18:00' },
      { days: 'السبت', time: '09:00 – 13:00' },
      { days: 'الأحد', time: 'مغلق' },
    ],
  },

  // Google Sheets form receiver (Apps Script Web App URL)
  // 👉 Paste your new URL between the quotes
  formScriptUrl: '',

  // Facebook / Meta Pixel ID (numbers only)
  // 👉 Paste your Pixel ID between the quotes when you create it
  metaPixelId: '',
};

export const telLink = (intl: string) => `tel:${intl}`;
export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
