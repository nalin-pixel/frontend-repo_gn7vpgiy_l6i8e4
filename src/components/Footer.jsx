export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-slate-900 font-medium">FANIABELLA LTD</p>
          <p className="text-sm">Restoring Health, One Step at a Time</p>
          <p className="mt-3 text-sm">70 Spackmans Way, Slough, SL1 2SB, UK</p>
        </div>
        <div className="text-sm space-y-2">
          <p><a href="#services" className="hover:text-slate-900">Services</a></p>
          <p><a href="#contact" className="hover:text-slate-900">Contact</a></p>
          <p><a href="#home" className="hover:text-slate-900">Back to top</a></p>
        </div>
        <div className="text-sm space-y-2">
          <p>© {new Date().getFullYear()} FANIABELLA LTD. All rights reserved.</p>
          <p><a href="#" className="hover:text-slate-900">Privacy Policy</a> • <a href="#" className="hover:text-slate-900">Terms</a></p>
        </div>
      </div>
    </footer>
  );
}
