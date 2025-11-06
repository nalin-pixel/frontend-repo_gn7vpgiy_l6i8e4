import Spline from '@splinetool/react-spline';

const whatsappLink =
  "https://wa.me/447508519328?text=" +
  encodeURIComponent("Hello FANIABELLA LTD, I’d like to book a care service...");

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] w-full grid place-items-center overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to ensure contrast without blocking Spline */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Compassionate home care, made simple</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Person-centred support across Slough and nearby areas. Reliable carers for personal care, medication, companionship and more.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-slate-300 hover:border-slate-400 text-slate-800"
          >
            Book on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-slate-800 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
