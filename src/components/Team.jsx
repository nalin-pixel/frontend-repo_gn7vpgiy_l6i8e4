export default function Team() {
  const team = [
    { name: 'Faith A.', role: 'Registered Manager' },
    { name: 'Daniel K.', role: 'Senior Carer' },
    { name: 'Maria S.', role: 'Care Coordinator' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-slate-900">Our Team</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">A compassionate, highly trained team dedicated to dignified, person-centred care.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((t) => (
            <div key={t.name} className="p-5 rounded-lg border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-slate-100" />
              <h3 className="mt-3 text-base font-medium text-slate-900">{t.name}</h3>
              <p className="text-sm text-slate-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
