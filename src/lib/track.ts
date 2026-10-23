'use client';

/* Sends events to the Meta (Facebook) Pixel if it is installed.
   Does nothing when no Pixel ID is set in src/config/site.ts. */

type Fbq = (...args: unknown[]) => void;

export function track(event: 'Lead' | 'Contact', params?: Record<string, string>) {
  if (typeof window === 'undefined') return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (fbq) fbq('track', event, params);
}
