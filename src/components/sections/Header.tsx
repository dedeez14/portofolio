'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navigasi = [
  { label: 'Sistem', href: '#sistem' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Kontak', href: '#kontak' },
];

export function Header() {
  const [buka, setBuka] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#atas" className="judul text-lg text-ink">
          Dede Febriansyah
        </a>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          {navigasi.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-ink-2 hover:text-ink">
              {n.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setBuka((v) => !v)}
            aria-expanded={buka}
            aria-controls="menu-ponsel"
            aria-label={buka ? 'Tutup menu' : 'Buka menu'}
            className="rounded p-2 text-ink-2 hover:text-ink"
          >
            {buka ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {buka && (
        <nav id="menu-ponsel" aria-label="Navigasi ponsel" className="border-t border-rule bg-paper md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {navigasi.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setBuka(false)} className="block py-3 text-ink-2 hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
