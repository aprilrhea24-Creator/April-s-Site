const testimonials = [
  {
    quote:
      "The booking flow was effortless, and the dinner itself felt like hosting a restaurant in our home.",
    author: "Maya R.",
    label: "Private Chef Client"
  },
  {
    quote: "Our corporate lunch service arrived polished, on time, and beautifully presented.",
    author: "Jordan T.",
    label: "Corporate Catering Client"
  },
  {
    quote: "Meal prep finally feels luxurious instead of repetitive. The variety and quality are incredible.",
    author: "Andrea L.",
    label: "Weekly Meal Prep Client"
  }
];

export function Testimonials() {
  return (
    <section className="bg-[#08090b] py-24">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-[2rem] border border-white/10 bg-black p-8 shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
              <p className="text-lg font-semibold leading-8 text-white/70">{item.quote}</p>
              <div className="mt-8">
                <p className="font-black uppercase tracking-[0.12em] text-white">{item.author}</p>
                <p className="mt-1 text-sm font-semibold text-[#ff2631]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
