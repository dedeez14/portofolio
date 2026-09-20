import { education, experiences } from '@/data/portfolio';

const jenis: Record<string, string> = {
  'full-time': 'penuh waktu',
  'part-time': 'paruh waktu',
  freelance: 'lepas',
  contract: 'kontrak',
  internship: 'magang',
};

const tahun = (iso?: string) => (iso ? iso.slice(0, 4) : 'sekarang');

export function Experience() {
  const urut = [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));

  return (
    <section id="pengalaman" className="border-t border-rule">
      <div className="section-grid mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <h2 className="judul text-xl text-ink">Pengalaman</h2>
        <div>
          <ol className="divide-y divide-rule border-y border-rule">
            {urut.map((e) => (
              <li key={e.id} className="grid gap-2 py-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
                <p className="text-sm text-ink-3">
                  {tahun(e.startDate)} – {tahun(e.endDate)}
                </p>
                <div>
                  <h3 className="judul text-lg text-ink">
                    {e.position}
                    <span className="font-sans text-base font-normal text-ink-2"> di {e.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-ink-3">
                    {jenis[e.type] ?? e.type}, {e.location}
                  </p>
                  <ul className="prosa mt-3 list-disc space-y-1 pl-5 text-ink-2">
                    {e.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-ink-3">{e.technologies.join(', ')}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="judul mt-12 text-lg text-ink">Pendidikan</h3>
          <ul className="mt-3">
            {education.map((ed) => (
              <li key={ed.id} className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
                <p className="text-sm text-ink-3">
                  {tahun(ed.startDate)} – {tahun(ed.endDate)}
                </p>
                <p className="text-ink-2">
                  <span className="font-medium text-ink">{ed.institution}</span>
                  {ed.field ? `, ${ed.field}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
