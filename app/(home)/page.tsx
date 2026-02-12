import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PaymentProvider } from '@/context/PaymentContext';
import { PricingDetails } from '@/components/Pricing/Pricing';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Database,
  FileSearch,
  GitBranch,
  Rocket,
  Server,
  Shield,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { FaAws, FaDropbox, FaGithub, FaGoogleDrive } from 'react-icons/fa';

const workflow = [
  {
    step: '01',
    title: 'Connect your data',
    description: 'Plug in files, knowledge bases, and cloud drives with prebuilt connectors and fast sync.',
    icon: <Cloud className="h-5 w-5" />,
  },
  {
    step: '02',
    title: 'Index with AI precision',
    description: 'Automatic chunking, embeddings, and vector indexing tuned for high-quality retrieval.',
    icon: <Database className="h-5 w-5" />,
  },
  {
    step: '03',
    title: 'Ship smarter answers',
    description: 'Hybrid search + reranking APIs deliver relevant context in milliseconds.',
    icon: <FileSearch className="h-5 w-5" />,
  },
];

const valueProps = [
  {
    title: 'Enterprise-grade reliability',
    copy: 'Built for production with scalable pipelines, robust APIs, and predictable performance.',
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: 'Developer-first experience',
    copy: 'Clear docs, clean APIs, and minimal setup so teams can integrate faster with less friction.',
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: 'Open and extensible',
    copy: 'No lock-in. Self-host or use cloud, and customize every stage of your retrieval pipeline.',
    icon: <GitBranch className="h-5 w-5" />,
  },
];

const metrics = [
  { label: 'Production Integrations', value: '10k+' },
  { label: 'Median Retrieval Latency', value: '120ms' },
  { label: 'Open-Source Commitment', value: '100%' },
  { label: 'Uptime SLA Ready', value: '99.9%' },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.16),transparent_30%),linear-gradient(to_bottom,transparent,rgba(17,24,39,0.06))]" />

      <section className="container mx-auto max-w-6xl px-4 pb-16 pt-12 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 animate-[fadeSlideIn_0.7s_ease-out]">
            <Badge className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary">
              <Sparkles className="mr-2 h-3.5 w-3.5" /> Modern RAG Platform for Serious Teams
            </Badge>

            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl md:leading-tight">
                Turn your product into an
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent"> AI growth engine</span>
              </h1>
              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                Dcup helps you build trustable AI experiences with blazing-fast retrieval, flexible deployment, and conversion-focused UX in every interaction.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild className="group">
                <Link href="https://app.dcup.dev/">
                  Start Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/Dcup-dev/dcup" target="_blank" rel="noreferrer noopener">
                  <FaGithub className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border bg-background/70 p-3 backdrop-blur">
                  <p className="text-xl font-bold">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-[floatIn_0.9s_ease-out]">
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <Image
                src="/dcup_dashboard.gif"
                alt="Dcup dashboard preview"
                width={1300}
                height={760}
                unoptimized
                priority
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border bg-card/70 p-6 shadow-sm backdrop-blur md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <Workflow className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold md:text-3xl">Built for conversion and retention</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {workflow.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-xl border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ animation: `fadeSlideIn 0.55s ease-out ${idx * 0.12}s both` }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  <span>{item.step}</span>
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((item, idx) => (
            <article
              key={item.title}
              className="group rounded-2xl border bg-gradient-to-b from-background to-muted/40 p-6 transition-all hover:border-primary/40 hover:shadow-xl"
              style={{ animation: `fadeSlideIn 0.55s ease-out ${idx * 0.1 + 0.15}s both` }}
            >
              <div className="mb-4 inline-flex rounded-xl border bg-background p-3 text-primary transition-transform group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 rounded-2xl border bg-[#0d1117] p-6 text-white md:grid-cols-2 md:p-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">API retrieval that just works</h2>
            <p className="mb-6 text-sm text-white/70">
              Accelerate product adoption with precise, grounded answers your users can trust.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-white/80">
              {['Hybrid Search', 'LLM Re-ranking', 'Advanced Filters', 'Source Tracing'].map((feature) => (
                <span key={feature} className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1">
                  <Check className="h-3.5 w-3.5" /> {feature}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-2xl text-white/85">
              <FaGoogleDrive />
              <FaDropbox />
              <FaAws />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-5">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{ background: 'transparent', margin: 0, padding: 0, fontSize: '0.85rem' }}
            >
{`POST /api/retrievals
{
  "query": "how can I reduce onboarding churn?",
  "top_chunk": 5,
  "rerank": true,
  "filters": {
    "source": "google-drive",
    "updated_after": "2025-01-01"
  }
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border bg-gradient-to-r from-primary/10 via-background to-pink-500/10 p-8 text-center md:p-12">
          <Badge variant="outline" className="mb-4">
            <Rocket className="mr-2 h-3.5 w-3.5" /> 100% Open Source
          </Badge>
          <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-bold md:text-4xl">
            Build AI experiences that look premium and convert like product-led growth machines.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Explore docs, launch quickly, and scale confidently with Dcup across cloud or self-hosted environments.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/docs">Explore Docs</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border bg-background/70 p-4 md:p-8">
          <PaymentProvider redirectTo="https://app.dcup.dev">
            <PricingDetails />
          </PaymentProvider>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-10 text-center text-white">
          <p className="mb-2 text-sm uppercase tracking-widest text-white/70">No black boxes. No lock-in.</p>
          <h2 className="text-2xl font-semibold md:text-3xl">Your data stack should stay yours.</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-white/80">
            <Server className="h-4 w-4" />
            Deploy anywhere. Customize everything.
          </div>
        </div>
      </section>
    </main>
  );
}
