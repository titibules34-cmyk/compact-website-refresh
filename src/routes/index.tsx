import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

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
  [
    "Asset Recovery",
    "Asset Tracing and Investigations",
    "Specializing in Asset Tracing, Crypto Recovery Services offers tailored plans to aid law enforcement and law firms. We provide key evidence for successful fund recovery.",
    "/assets/asset-tracing.png",
  ],
  [
    "OSINT & HUMINT",
    "Cyber Intelligence Services",
    "Leveraging diverse techniques like Open Source Intelligence, our team delivers actionable evidence. This service augments the capabilities of law enforcement and legal professionals.",
    "/assets/cyber-intel-icon.png",
  ],
  [
    "LEO Certified",
    "Cyber Investigation Team",
    "Our team of U.S.-Certified Cyber Investigators conducts global inquiries, spanning 6 continents. We are adept at gathering essential evidence for varied cases.",
    "/assets/cyber-investigation-icon.png",
  ],
  [
    "On-Chain Forensics",
    "Cryptocurrency Tracing",
    "We excel at tracking most types of cryptocurrencies and assets. If digital assets are transferred, we have the capability to trace and follow their movement.",
    "/assets/crypto-tracing.png",
  ],
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
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50 mx-auto flex w-[min(100%-3rem,90rem)] items-center justify-between px-2 py-6">
        <a href="#top" className="flex items-center gap-3 text-sm font-extrabold tracking-widest">
          <img src="/assets/cyber-justice-logo.png" alt="Cyber Justice shield" className="h-11 w-11 object-contain" />
          <span>CYBER <span className="text-accent">JUSTICE</span></span>
        </a>
        <nav className="flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#about" className="transition hover:text-accent">About Us</a>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen((value) => !value)} className="flex items-center gap-2 transition hover:text-accent">Services <span aria-hidden="true">⌄</span></button>
            {servicesOpen && <div className="absolute right-0 top-full min-w-52 rounded-xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur">
              <a href="#services" onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-secondary">Our services</a>
              <Link to="/asset-recovery" onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-secondary">Asset recovery</Link>
              <Link to="/cyber-intelligence" onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-secondary">Cyber intelligence</Link>
            </div>}
          </div>
          <a href="#contact" className="transition hover:text-accent">Contact Us</a>
        </nav>
      </header>

      <section id="top" className="relative isolate flex min-h-[48rem] h-screen items-center overflow-hidden">
        <img src="/assets/cyber-justice-hero.webp" alt="Lady Justice in a blue digital investigation room" className="absolute inset-0 z-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,15,38,0.72)_0%,rgba(5,15,38,0.38)_48%,rgba(5,15,38,0.12)_100%)]" />
        <div className="relative z-20 mx-auto w-[min(100%-3rem,90rem)] px-2 pt-20">
          <p className="eyebrow">Digital forensics & investigations</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-tight sm:text-7xl">
            Actionable <span className="text-accent">intelligence</span> solutions.
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tracing, recovery, and forensic intelligence for law firms, investigators, and institutions worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Request a consultation</a>
            <a href="#services" className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary">Our services</a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            UK Registered Company · Worldwide Asset Recovery & Intelligence Operations
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto w-[min(100%-2rem,64rem)] py-20">
        <span id="services" />
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl font-extrabold">Focused capabilities, clear boundaries.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map(([tag, title, text, img]) => (
            <article key={title} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary">
              <div className="flex items-start gap-4">
                <img src={img} alt="" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
                <div>
                  <p className="eyebrow">{tag}</p>
                  <h3 className="mt-1 font-semibold">{title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{text}</p>
              {title === "Asset Tracing and Investigations" ? (
                <Link to="/asset-recovery" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : title === "Cyber Intelligence Services" ? (
                <Link to="/cyber-intelligence" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : title === "Cyber Investigation Team" ? (
                <Link to="/cyber-intelligence" search={{ team: true }} className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : title === "Cryptocurrency Tracing" ? (
                <Link to="/asset-recovery" search={{ crypto: true }} className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : (
                <a href="#contact" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </a>
              )}
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
