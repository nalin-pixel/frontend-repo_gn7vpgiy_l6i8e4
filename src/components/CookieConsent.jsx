import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const ok = localStorage.getItem('cookie-ok');
    if (!ok) setVisible(true);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 z-50">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-700">We use minimal, privacy-friendly analytics to improve our site. Consent is optional.</p>
        <div className="mt-3 flex gap-3">
          <button onClick={() => { localStorage.setItem('cookie-ok', 'yes'); setVisible(false); }} className="inline-flex items-center px-4 py-2 rounded-md border border-slate-300 hover:border-slate-400 text-slate-800 text-sm">Accept</button>
          <button onClick={() => setVisible(false)} className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-4">Decline</button>
        </div>
      </div>
    </div>
  );
}
