import { Link } from "@tanstack/react-router";
import { Bitcoin, Blocks, ChartNoAxesCombined, Search, ShieldCheck, Wallet } from "lucide-react";

const features = [
  { icon: Bitcoin, title: "Not all cryptos are equal", text: "Most cryptocurrencies are traceable, though not all. We can trace widely used assets including Bitcoin and Ethereum, as well as other supported cryptocurrencies." },
  { icon: Wallet, title: "Follow the wallet trail", text: "We analyse blockchain movements, identify relevant wallet addresses and map the flow of virtual assets between transactions." },
  { icon: Search, title: "Investigative intelligence", text: "Where the evidence supports it, our analysis can help identify services or platforms associated with wallets and develop further investigative leads." },
];

export function CryptocurrencyTracing() {
  return (
    <main className="light min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(100%-2rem,64rem)] items-center justify-between rounded-full border border-border bg-background/70 px-5 py-2.5 backdrop-blur">
        <Link to="/" className="text-sm font-extrabold tracking-widest">CYBER <span className="text-accent">JUSTICE</span></Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">&larr; Back home</Link>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src="/assets/cyber-justice-hero.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-[min(100%-2rem,64rem)] pb-16 pt-36">
          <p className="eyebrow">Blockchain intelligence · Digital asset investigations</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Cryptocurrency <span className="text-accent">Tracing and Recovery</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The first step in investigating misappropriated virtual assets is establishing where they moved and identifying the wallets and services involved. This helps define the investigative target.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Our blockchain analysts use specialist technology and practical experience to trace supported cryptocurrencies and document the movement of digital assets.
          </p>
          <Link to="/" hash="contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            Request an evaluation
          </Link>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,64rem)] py-16">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Understanding cryptocurrencies</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>Cryptocurrencies are digital assets that use blockchain technology to support peer-to-peer value transfer. Many operate on decentralised networks and may sit outside traditional financial intermediaries, although laws and regulatory requirements can still apply.</p>
            <p>Transactions on public blockchains are generally recorded on a shared ledger. That record can provide a valuable source of evidence when tracing the movement of virtual assets.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary"><Icon className="h-6 w-6" strokeWidth={1.75} /></span>
              <p className="mt-5 font-mono text-xs tracking-[0.2em] text-muted-foreground/70">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid w-[min(100%-2rem,64rem)] gap-10 py-16 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">The technical solution</p>
            <h2 className="mt-3 text-3xl font-extrabold">Follow the on-chain evidence.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Each transaction recorded on a public blockchain can help build a timeline of how assets moved from one address to another. Our work focuses on tracing those movements, identifying relevant wallet clusters and documenting leads for further investigation.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><Blocks className="h-6 w-6 text-accent" /><span className="font-semibold">Blockchain transaction trail</span></div>
            <div className="mt-6 flex items-center justify-between gap-2">
              {["Origin", "Wallet", "Wallet", "Service"].map((label, i) => (
                <div key={i} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary"><Wallet className="h-5 w-5" /></span>
                  <span className="text-center text-[11px] text-muted-foreground">{label}</span>
                  {i < 3 && <span className="sr-only">leads to</span>}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">Illustrative flow only. Actual tracing paths and attribution depend on the blockchain, available evidence and investigative context.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,64rem)] py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">How much bitcoin?</p>
            <h2 className="mt-3 text-3xl font-extrabold">Digital asset losses can be substantial.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">The full scale of stolen, embezzled or misappropriated cryptocurrency is difficult to quantify. If you are considering a cryptocurrency transaction, independent due diligence on the wallets and counterparties involved may help inform your decision.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <ChartNoAxesCombined className="h-10 w-10 text-accent" />
            <p className="mt-5 text-xl font-bold">Review before you transact.</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">A wallet and transaction review can help surface relevant on-chain history and potential risk indicators. Findings are evidence-led and are not a guarantee that an asset is safe or recoverable.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto w-[min(100%-2rem,64rem)] py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary"><ShieldCheck className="h-7 w-7" /></span>
            <h2 className="mt-5 text-3xl font-extrabold">Already lost cryptocurrency?</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Arrange an initial conversation to discuss the circumstances and whether your case may benefit from cryptocurrency tracing. Recovery cannot be guaranteed; any next steps depend on the evidence and the relevant platforms and authorities.</p>
            <Link to="/" hash="contact" className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Learn more / Request a consultation</Link>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground"><p>© {new Date().getFullYear()} Cyber Justice · No recovery outcome is guaranteed · Not legal or financial advice.</p></footer>
    </main>
  );
}
