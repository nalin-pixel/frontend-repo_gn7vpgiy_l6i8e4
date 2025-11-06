import Spline from '@splinetool/react-spline';

const whatsappLink =
  "https://wa.me/447508519328?text=" +
  encodeURIComponent("Hello FANIABELLA LTD, I’d like to book a care service...");

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full grid place-items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to enhance readability; pointer-events-none to not block the Spline */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block text-xs uppercase tracking-widest text-emerald-300/90 bg-white/10 px-3 py-1 rounded-full ring-1 ring-white/20">Registered Care Agency • Slough, UK</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Compassionate Home Care,
            <span className="text-emerald-300"> Delivered with Dignity</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-prose">
            FANIABELLA LTD — “Restoring Health, One Step at a Time”. Reliable personal care, medication support, companionship and more across Slough and surrounding areas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow"
            >
              Book on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium ring-1 ring-white/20"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-white/70">
            <div>• CQC-ready standards</div>
            <div>• Trained & vetted carers</div>
            <div>• Fully insured</div>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
