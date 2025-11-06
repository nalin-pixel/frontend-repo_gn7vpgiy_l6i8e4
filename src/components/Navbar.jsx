import { Phone, MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/447508519328?text=" +
  encodeURIComponent("Hello FANIABELLA LTD, I’d like to book a care service...");

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
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
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-medium px-3 py-2 rounded-md"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium px-3 py-2"
          >
            <Phone size={18} />
            +447508519328
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 text-slate-900">
      {/* Minimal cross icon */}
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}
