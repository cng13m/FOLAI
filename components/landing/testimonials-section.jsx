import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const testimonials = [
  {
    quote:
      "Klientët tanë marrin përgjigje shumë më shpejt dhe ekipi ynë nuk humbet më kohë me pyetjet e njëjta gjatë gjithë ditës.",
    name: "Dr. Era K.",
    role: "Drejtuese klinike"
  },
  {
    quote:
      "Rezervimet tani hyjnë me më shumë qartësi dhe më pak gabime. Për ne ka qenë një ndryshim i dukshëm në organizim.",
    name: "Arben M.",
    role: "Menaxher restoranti"
  },
  {
    quote:
      "Na pëlqeu sepse duket premium edhe për klientin. Përgjigjet janë të pastra, profesionale dhe të menjëhershme.",
    name: "Lira P.",
    role: "Pronare salloni"
  }
];

export function TestimonialsSection() {
  return (
    <SectionShell id="besim">
      <Reveal>
        <SectionHeading
          eyebrow="Besim dhe rezultat"
          title="Bizneset serioze e kuptojnë shpejt kur një sistem ua lehtëson ritmin."
          description="Përshtypja që lë FOL.AI te klienti është po aq e rëndësishme sa koha që kursen për ekipin."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.07}>
            <div className="glass-panel h-full rounded-[1.8rem] p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-100">
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-6 text-base leading-8 text-slate-200/88">“{testimonial.quote}”</p>
              <div className="mt-8 border-t border-white/8 pt-5">
                <div className="font-display text-lg font-semibold text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
