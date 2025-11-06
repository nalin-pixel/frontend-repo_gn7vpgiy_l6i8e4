import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact & Booking</h2>
          <p className="mt-3 text-slate-600">
            We respond promptly to enquiries from families and referrers. Share a few details and we’ll be in touch.
          </p>

          <div className="mt-6 space-y-3 text-slate-700">
            <p className="flex items-center gap-2"><Phone size={18}/> 07508 519328</p>
            <p className="flex items-center gap-2"><Mail size={18}/> info@faniabella.co.uk</p>
            <p className="flex items-start gap-2"><MapPin size={18}/> 70 Spackmans Way, Slough, SL1 2SB, England, UK</p>
          </div>

          <div className="mt-6">
            <iframe
              title="FANIABELLA LTD Location"
              src="https://www.google.com/maps?q=70%20Spackmans%20Way,%20Slough,%20SL1%202SB&output=embed"
              className="w-full h-56 rounded-md border border-slate-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Netlify-compatible form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Full name" name="name" required />
            <Input label="Phone" name="phone" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Postcode" name="postcode" required />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Service</label>
              <select name="service" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500">
                <option>Personal Care</option>
                <option>Medication Support</option>
                <option>Companionship</option>
                <option>Domestic Assistance</option>
                <option>Live-in Care</option>
                <option>Specialist Care</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Tell us about your needs"/>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow">Send enquiry</button>
            <a href="https://wa.me/447508519328?text=Hello%20FANIABELLA%20LTD,%20I%E2%80%99d%20like%20to%20book%20a%20care%20service..." target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:text-emerald-800 font-medium">Or book on WhatsApp →</a>
          </div>
          <p className="mt-3 text-xs text-slate-500">By submitting you agree to our Privacy Policy. Your data is handled in line with GDPR.</p>
        </form>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </div>
  );
}
