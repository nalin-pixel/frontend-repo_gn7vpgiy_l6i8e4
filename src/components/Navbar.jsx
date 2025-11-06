import { Phone, MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/447508519328?text=" +
  encodeURIComponent("Hello FANIABELLA LTD, I’d like to book a care service...");

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
          <div className="leading-tight">
            <p className="font-semibold text-slate-900 tracking-tight">FANIABELLA LTD</p>
            <p className="text-xs text-slate-500 -mt-0.5">Restoring Health, One Step at a Time</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-3 py-2 rounded-md shadow-sm"
          >
            <MessageCircle size={18} />
            Book on WhatsApp
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium px-3 py-2"
          >
            <Phone size={18} />
            07508 519328
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-emerald-500 to-sky-600 text-white">
      {/* Simple cross-heart mark */}
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path
          d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10s-2-1.25-4-0z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="M12 7v10M7 12h10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
