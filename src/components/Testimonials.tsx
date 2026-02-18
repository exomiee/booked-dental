"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We were spending $80+ per lead with our previous agency. Booked.Dental got us to a consistent $24 per qualified call. Game changer for our implant side.",
    name: "Dr. Sarah Chen",
    role: "Owner, Smile Studio",
  },
  {
    quote: "The UGC they produced actually looks like our patients. Our call volume went up and our cost per call went down within 90 days.",
    name: "Dr. Michael Torres",
    role: "Owner, TW Studio",
  },
  {
    quote: "Finally someone who gets high-ticket dentistry. They don't waste budget on cold traffic—every dollar is aimed at people ready to book.",
    name: "Dr. Lisa Park",
    role: "Owner, Park Dental Arts",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Implant and veneer practices that care about cost per call—and results.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 shadow-sm"
            >
              <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
