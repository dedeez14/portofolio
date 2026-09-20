import { ExternalLink } from 'lucide-react';
import { personalInfo, sistemBerjalan } from '@/data/portfolio';

export const nomorWa = personalInfo.phone?.replace(/\D/g, '') ?? '';

export function Hero() {
  const tayang = sistemBerjalan.filter((s) => s.tayang);

  return (
    <section id="sistem" className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 className="display text-[2.75rem] sm:text-6xl lg:text-[4.5rem]">
            Saya membangun sistem yang dipakai bisnis setiap hari.
          </h1>
          <p className="prosa mt-7 text-lg text-ink-2">
            {personalInfo.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${nomorWa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper hover:opacity-90"
            >
              Hubungi lewat WhatsApp
            </a>
            <a href="#proyek" className="inline-flex items-center rounded-md border border-rule px-5 py-3 text-sm font-medium text-ink hover:border-ink">
              Lihat proyek
            </a>
          </div>
        </div>

        <aside className="relative lg:col-span-5" aria-labelledby="judul-papan">
          <div className="stempel -top-4 right-3 text-[0.68rem] sm:-top-5 sm:right-5 sm:text-xs">
            Berjalan di produksi
            <br />
            <span className="text-[1.35em]">2025 – 2026</span>
          </div>
          <div className="rounded-xl border border-rule bg-board p-5 sm:p-6">
            <h2 id="judul-papan" className="judul pr-36 text-base text-ink sm:pr-44">
              Sistem yang berjalan hari ini
            </h2>
            <p className="mt-1 pr-24 text-sm text-ink-2 sm:pr-0">
              Semuanya di server yang saya kelola sendiri. Silakan buka.
            </p>
            <ul className="mt-4">
              {tayang.map((s) => (
                <li key={s.slug}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="baris-sistem group" aria-label={`Buka ${s.nama}`}>
                    <span className="min-w-0">
                      <span className="nama-sistem font-semibold text-ink">{s.nama}</span>
                      <span className="mt-0.5 block text-sm text-ink-2">{s.fungsi}</span>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs text-ink-3">
                        {s.domain} <ExternalLink size={11} aria-hidden />
                      </span>
                    </span>
                    <span className="max-w-[9rem] text-right text-xs leading-snug text-ink-3">{s.stack}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
