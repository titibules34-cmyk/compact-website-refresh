import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cyber-intelligence")({
  head: () => ({
    meta: [
      { title: "Cyber Intelligence Services — Cyber Justice" },
      {
        name: "description",
        content:
          "OSINT, website forensics, skip tracing, crypto expert opinions, due diligence, litigation support and global cyber investigations.",
      },
      { property: "og:title", content: "Cyber Intelligence Services — Cyber Justice" },
      { property: "og:description", content: "Solutions based on intelligence for law firms and virtual asset service providers." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CyberIntelligence,
});

const solutions = [
  ["Cyber Intelligence & Website Forensics", "Our team uses a variety of methods, including Open Source Intelligence (OSINT) and advanced forensic techniques, to provide the raw data needed for actionable intelligence. We also specialize in uncovering the individuals or entities behind suspicious websites and identifying any fraudulent or malicious activities online."],
  ["Asset Tracing & Skip Trace Services", "The first step to recovery is locating recoverable assets, whether they are physical, financial, or digital. Our experienced team can also locate missing or elusive individuals through advanced skip-tracing techniques, ensuring that no lead is left unexplored."],
  ["Cryptocurrency & Expert Opinion Services", "We track the movement of most cryptocurrencies and assets across the blockchain. Our certified experts provide in-depth analysis and authoritative opinions on complex blockchain transactions, supporting legal proceedings and regulatory compliance."],
  ["Due Diligence & Background Reports", "We offer comprehensive appraisals of assets, risk, historic data, and liabilities for individual and corporate entities. Our due diligence services are essential for making informed decisions, whether in business partnerships or investments."],
  ["Asset Tracing, Recovery Assistance & Financial Investigations", "We offer solutions for asset tracing, recovery assistance, and financial investigations. If you or your clients have recoverable assets, we can build a recovery plan tailored to fit your case, including retrocession fee recovery and other financial inquiries."],
  ["Cyber Investigations", "We use state-of-the-art cyber tools, software solutions, and intelligence techniques, including OSINT, HUMINT, CYBINT, and FININT. Our certified cyber investigators have experience with investigations spanning six continents, providing you with comprehensive support in complex cases."],
  ["Retrocession Fee Recovery", "Retrocession fees, also known colloquially as “kickbacks” are paid to a wealth manager to encourage them to promote specific financial products or investment funds."],
  ["Litigation Support", "We offer support to law firms and individuals involved in complex litigation. Including analysis of large data sets, data analysis and investigative services."],
  ["Global Investigations", "Our Cyber Investigators are Certified in the United States and experienced with investigations spanning 6 continents."],
];

const clients = ["Law Firms", "Virtual Asset Service Providers"];

function CyberIntelligence() {
  return (
    <main className="light min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(100%-2rem,64rem)] items-center justify-between rounded-full border border-border bg-background/70 px-5 py-2.5 backdrop-blur">
        <Link to="/" className="text-sm font-extrabold tracking-widest">
          CYBER <span className="text-accent">JUSTICE</span>
        </Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">&larr; Back home</Link>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src="/assets/cyber-justice-hero.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-[min(100%-2rem,64rem)] pb-14 pt-36">
          <p className="eyebrow">OSINT & HUMINT</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Solutions based on <span className="text-accent">Intelligence</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid w-[min(100%-2rem,64rem)] gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map(([title, text], i) => (
          <article key={title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-glow">
            <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 text-lg font-bold leading-snug">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto w-[min(100%-2rem,64rem)] py-16">
          <p className="eyebrow">Our Clients</p>
          <h2 className="mt-3 text-3xl font-extrabold">We Serve A Variety Of Businesses & Industries</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            We provide solutions for a variety of Industries as well as High-Net-Worth Individuals.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {clients.map((c, i) => (
              <div key={c} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="text-3xl font-extrabold text-accent">0{i + 1}</span>
                <span className="text-lg font-bold">{c}</span>
              </div>
            ))}
          </div>
          <Link to="/" hash="contact" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            Request a consultation
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Cyber Justice · No recovery outcome is guaranteed · Not legal or financial advice.</p>
      </footer>
    </main>
  );
}
