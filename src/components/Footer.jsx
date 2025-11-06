export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-semibold">FANIABELLA LTD</p>
          <p className="text-sm text-slate-400">“Restoring Health, One Step at a Time”</p>
          <p className="mt-3 text-sm">70 Spackmans Way, Slough, SL1 2SB, UK</p>
          <p className="text-sm">SIC: 86900 — Other human health activities</p>
        </div>
        <div className="text-sm space-y-2">
          <p><a href="#services" className="hover:text-white">Services</a></p>
          <p><a href="#contact" className="hover:text-white">Contact</a></p>
          <p><a href="#home" className="hover:text-white">Back to top</a></p>
        </div>
        <div className="text-sm space-y-2">
          <p>© {new Date().getFullYear()} FANIABELLA LTD. All rights reserved.</p>
          <p><a href="#" className="hover:text-white">Privacy Policy</a> • <a href="#" className="hover:text-white">Terms</a></p>
        </div>
      </div>
    </footer>
  );
}
