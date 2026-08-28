import SectionHeading from '@/components/ui/SectionHeading'

const partners = [
  { name: 'University of Melbourne', abbr: 'UoM' },
  { name: 'Monash University', abbr: 'Monash' },
  { name: 'TU Munich', abbr: 'TUM' },
  { name: 'RWTH Aachen', abbr: 'RWTH' },
  { name: 'IALC', abbr: 'IALC' },
  { name: 'British Council', abbr: 'BC' },
  { name: 'Goethe-Institut', abbr: 'Goethe' },
  { name: 'Alliance Française', abbr: 'AF' },
  { name: 'DAAD', abbr: 'DAAD' },
  { name: 'ANU', abbr: 'ANU' },
]

export default function PartnerLogoStrip() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-section">
        <SectionHeading
          eyebrow="Dipercaya & Bermitra"
          title="Mitra & Partner Kami"
          highlight="Mitra"
          subtitle="Bekerja sama dengan universitas terkemuka, lembaga bahasa internasional, dan institusi pemerintah di Australia, Jerman, dan negara OECD."
        />

        {/* Partner logos grid — using text placeholders since no actual logos yet */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 md:h-20 rounded-xl border transition-all hover:border-gray-300 hover:shadow-sm"
              style={{ background: '#F8F9FC', borderColor: '#e8ecf4' }}
              title={partner.name}
            >
              <span
                className="font-bold text-sm md:text-base text-center px-3 leading-tight"
                style={{ color: 'rgba(0,39,152,0.45)' }}
              >
                {partner.abbr}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: '#5a6a8a' }}>
          Dan 20+ institusi mitra lainnya di seluruh dunia.
        </p>
      </div>
    </section>
  )
}
