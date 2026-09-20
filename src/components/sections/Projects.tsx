import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';

const status: Record<string, string> = {
  completed: 'selesai',
  'in-progress': 'terus dikembangkan',
  planned: 'direncanakan',
};

export function Projects() {
  const daftar = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="proyek" className="border-t border-rule">
      <div className="section-grid mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <div>
          <h2 className="judul text-xl text-ink">Proyek</h2>
          <p className="mt-2 text-sm text-ink-2 lg:pr-6">
            Tangkapan layar dari sistem yang hidup, bukan mockup.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {daftar.map((p) => {
            const tautan = p.liveUrl && p.liveUrl !== '#' ? p.liveUrl : undefined;
            return (
              <li key={p.id} className="ubin">
                {p.imageUrl && (
                  <div className="overflow-hidden rounded-lg border border-rule bg-paper-2">
                    <Image src={p.imageUrl} alt={`Tampilan ${p.title}`} width={1200} height={630} className="aspect-[1200/630] w-full object-cover object-top" />
                  </div>
                )}
                <h3 className="judul mt-4 text-lg text-ink">
                  {tautan ? (
                    <a href={tautan} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 hover:text-link hover:underline underline-offset-4">
                      {p.title} <ExternalLink size={14} className="mt-1.5 shrink-0" aria-hidden />
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="prosa mt-2 text-sm text-ink-2">{p.description}</p>
                <p className="mt-3 text-xs text-ink-3">
                  {p.technologies.join(', ')} — {status[p.status] ?? p.status}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
