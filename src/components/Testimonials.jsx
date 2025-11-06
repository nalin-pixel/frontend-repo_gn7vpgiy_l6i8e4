export default function Testimonials() {
  const quotes = [
    { quote: 'Professional, kind and reliable. Mum is happier and more confident.', author: 'Sarah, Daughter' },
    { quote: 'Their carers are attentive and respectful. Communication is great.', author: 'David, Son' },
    { quote: 'We felt supported from day one. Highly recommend.', author: 'Local Referrer' },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {quotes.map((q, i) => (
            <figure key={i} className="p-5 rounded-lg border border-slate-200 bg-white">
              <blockquote className="text-slate-800">“{q.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
