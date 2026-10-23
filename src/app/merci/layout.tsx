import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merci – OIJIH Assurances',
  robots: { index: false, follow: false },
};

export default function MerciLayout({ children }: { children: React.ReactNode }) {
  return children;
}
