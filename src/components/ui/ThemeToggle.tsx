'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/** Saklar tema. Tema awal dipasang skrip di <head> (lib/theme.ts) sebelum React hidup, jadi tidak berkedip. */
export function ThemeToggle() {
  const [gelap, setGelap] = useState<boolean | null>(null);

  useEffect(() => {
    setGelap(document.documentElement.classList.contains('dark'));
  }, []);

  const ganti = () => {
    const ke = !gelap;
    setGelap(ke);
    document.documentElement.classList.toggle('dark', ke);
    try {
      localStorage.setItem('theme', ke ? 'dark' : 'light');
    } catch {
      /* penyimpanan bisa diblokir; tema tetap berlaku untuk sesi ini */
    }
  };

  if (gelap === null) return <span className="inline-block h-9 w-9" aria-hidden />;

  return (
    <button
      type="button"
      onClick={ganti}
      aria-label={gelap ? 'Ganti ke tampilan terang' : 'Ganti ke tampilan gelap'}
      className="rounded p-2 text-ink-2 hover:text-ink"
    >
      {gelap ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
