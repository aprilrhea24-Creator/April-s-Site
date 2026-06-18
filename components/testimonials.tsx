const testimonials = [
  {
    quote:
      "The new portal made our intake and approval process feel instantly more professional.",
    author: "Maya R.",
    label: "Operations Client"
  },
  {
    quote: "We finally had one place for requests, milestones, and executive visibility.",
    author: "Jordan T.",
    label: "Professional Services Client"
  },
  {
    quote: "The automation paid for itself by removing the admin work we kept accepting as normal.",
    author: "Andrea L.",
    label: "Founder Client"
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="glass-panel rounded-[2rem] p-8">
              <p className="text-lg leading-8 text-slate-100">{item.quote}</p>
              <div className="mt-8">
                <p className="font-medium text-white">{item.author}</p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
