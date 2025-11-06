import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/447508519328?text=" +
  encodeURIComponent("Hello FANIABELLA LTD, I’d like to book a care service...");

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">We respond promptly to enquiries from families and referrers.</p>

          <div className="mt-5 space-y-2 text-slate-700 text-sm">
            <p className="flex items-center gap-2"><Phone size={18}/> +447508519328</p>
            <p className="flex items-center gap-2"><Mail size={18}/> info@faniabella.co.uk</p>
            <p className="flex items-start gap-2"><MapPin size={18}/> 70 Spackmans Way, Slough, SL1 2SB, England, UK</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 mt-2 text-slate-800 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500"
            >
              <MessageCircle size={18}/> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-6">
            <iframe
              title="FANIABELLA LTD Location"
              src="https://www.google.com/maps?q=70%20Spackmans%20Way,%20Slough,%20SL1%202SB&output=embed"
              className="w-full h-48 rounded-md border border-slate-200"
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
          className="bg-white p-6 rounded-lg border border-slate-200"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Full name" name="name" required />
            <Input label="Phone" name="phone" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Postcode" name="postcode" required />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Service</label>
              <select name="service" className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900">
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
              <textarea name="message" rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="Tell us about your needs"/>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-slate-300 hover:border-slate-400 text-slate-800">Send enquiry</button>
            <a href={whatsappLink} target="_blank" rel="noreferrer noopener" className="text-slate-800 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500">Or WhatsApp →</a>
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
        className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900"
      />
    </div>
  );
}
