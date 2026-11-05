import { useEffect, useState } from "react";

const WORDS = ["tracing.", "intelligence.", "recovery."];
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyber Justice — Digital Forensics & Investigations" },
      {
        name: "description",
        content:
          "Crypto tracing, cyber intelligence and clear evidence documentation for individuals, businesses and legal professionals.",
      },
      { property: "og:title", content: "Cyber Justice — Digital Forensics & Investigations" },
      {
        property: "og:description",
        content: "Evidence-led digital research with clear records and realistic next steps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["Crypto asset tracing", "Map public transactions, wallets and on-chain movements.", "/assets/crypto-tracing.png"],
  ["Cyber intelligence", "Research domains, online identities and infrastructure.", "/assets/cyber-intel-icon.png"],
  ["Digital investigations", "Organise records, map events and flag open questions.", "/assets/cyber-investigation-icon.png"],
  ["Evidence documentation", "A clear chronology with sources and limitations.", "/assets/asset-tracing.png"],
];

const steps = [
  ["Scope", "Clarify what happened and what a review can establish."],
  ["Review", "Check your records and relevant public data."],
  ["Document", "Organise findings into a referenced timeline."],
  ["Next steps", "Explain what the evidence supports and who can help."],
];

const faqs = [
  ["Can recovery of lost funds be guaranteed?", "No. No legitimate investigator can guarantee recovery. Outcomes depend on the facts, platforms and institutions involved."],
  ["Will you ask for my seed phrase or private key?", "Never. Don't share seed phrases, private keys, passwords, PINs or one-time codes with anyone claiming to help."],
  ["What should I prepare?", "A short timeline, transaction IDs, public wallet addresses, platform names and redacted copies of relevant messages."],
  ["Is this legal or financial advice?", "No. This is digital research and documentation. Speak with a qualified professional about your circumstances."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const [word, setWord] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen">
      <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(100%-2rem,64rem)] items-center justify-between rounded-full border border-border bg-background/70 px-5 py-2.5 backdrop-blur">
        <a href="#top" className="text-sm font-extrabold tracking-widest">
          CYBER <span className="text-accent">JUSTICE</span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#services" className="hidden hover:text-foreground sm:inline">Services</a>
          <a href="#faq" className="hidden hover:text-foreground sm:inline">FAQ</a>
          <a href="#contact" className="rounded-full bg-primary px-4 py-1.5 font-semibold text-primary-foreground">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative flex h-[80vh] min-h-[32rem] max-h-[46rem] items-end overflow-hidden">
        <img src="/assets/cyber-justice-hero.webp" alt="Lady Justice in a blue digital investigation room" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-[min(100%-2rem,64rem)] pb-16 pt-32">
          <p className="eyebrow">Digital forensics & investigations</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Digital solutions for{" "}
            <span key={word} className="word-swap inline-block text-accent">{WORDS[word]}</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tracing, research and clear evidence for individuals, businesses and legal professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Request a consultation</a>
            <a href="#services" className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary">Our services</a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-[min(100%-2rem,64rem)] py-20">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl font-extrabold">Focused capabilities, clear boundaries.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map(([title, text, img]) => (
            <article key={title} className="flex gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary">
              <img src={img} alt="" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid w-[min(100%-2rem,64rem)] gap-8 py-16 sm:grid-cols-4">
          {steps.map(([title, text], i) => (
            <div key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto w-[min(100%-2rem,48rem)] py-20">
        <h2 className="text-center text-3xl font-extrabold">Straight answers.</h2>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
              >
                {q}
                <span className="text-accent" aria-hidden="true">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="px-5 pb-4 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-[min(100%-2rem,64rem)] pb-20">
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="text-3xl font-extrabold">Make the next step an informed one.</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Send a short, redacted summary of what happened. Never include passwords, private keys or seed phrases.
          </p>
          <a href="mailto:hello@cyberjustice.example" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            Email us
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Cyber Justice · No recovery outcome is guaranteed · Not legal or financial advice.</p>
      </footer>
    </main>
  );
}
