import { HeartPulse, Pill, Users, Sparkles, Home, Brain } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Personal Care",
    desc: "Dignified support with bathing, dressing, grooming and continence care.",
    benefits: ["Respectful assistance", "Promotes independence", "Daily routines"],
  },
  {
    icon: Pill,
    title: "Medication Support",
    desc: "Reminders, administration assistance and monitoring for safety.",
    benefits: ["Timely prompts", "MAR chart updates", "Liaison with GP"],
  },
  {
    icon: Users,
    title: "Companionship",
    desc: "Friendly visits, conversation, outings and emotional wellbeing.",
    benefits: ["Reduce loneliness", "Meal prep & activities", "Family updates"],
  },
  {
    icon: Sparkles,
    title: "Domestic Assistance",
    desc: "Light housekeeping, laundry, shopping and clean, safe homes.",
    benefits: ["Tidy environment", "Healthy meals", "Safer living"],
  },
  {
    icon: Home,
    title: "Live-in Care",
    desc: "24/7 support in the comfort of home, tailored to your lifestyle.",
    benefits: ["One-to-one care", "Family peace of mind", "Continuity"],
  },
  {
    icon: Brain,
    title: "Specialist Care",
    desc: "Experienced support for dementia, palliative, mental health and disabilities.",
    benefits: ["Compassion-led", "Trained carers", "Multidisciplinary"],
  },
];

const whatsappLink =
  "https://wa.me/447508519328?text=" +
  encodeURIComponent("Hello FANIABELLA LTD, I’d like to book a care service...");

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Care Services</h2>
          <p className="mt-3 text-slate-600">
            Flexible visits from 30 minutes to full-time live-in care. Always person-centred and respectful.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />)
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow"
          >
            Book via WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium ring-1 ring-emerald-200"
          >
            Enquire by Form
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, benefits }) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 hover:shadow-sm transition">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 grid place-items-center rounded-md bg-emerald-50 text-emerald-700">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-600">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="text-emerald-600">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-4 inline-block text-emerald-700 hover:text-emerald-800 font-medium"
      >
        Enquire now →
      </a>
    </div>
  );
}
