import { HeartPulse, Pill, Users, Sparkles, Home, Brain } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Personal Care", desc: "Support with bathing, dressing and continence.", },
  { icon: Pill, title: "Medication Support", desc: "Prompts, administration and monitoring.", },
  { icon: Users, title: "Companionship", desc: "Visits, conversation and activities.", },
  { icon: Sparkles, title: "Domestic Assistance", desc: "Light housekeeping, laundry and shopping.", },
  { icon: Home, title: "Live-in Care", desc: "24/7 support in the comfort of home.", },
  { icon: Brain, title: "Specialist Care", desc: "Dementia, palliative and complex needs.", },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600">Flexible visits from 30 minutes to full-time live-in care.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="p-5 rounded-lg border border-slate-200 hover:bg-slate-50 transition">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 grid place-items-center rounded-md bg-slate-100 text-slate-800">
          <Icon size={20} />
        </div>
        <h3 className="text-base font-medium text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}
