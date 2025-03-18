import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FaDatabase, FaGithub, FaGoogleDrive } from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import { DiRedis } from "react-icons/di";
import {
  RocketIcon,
  CodeIcon,
  ServerIcon,
  PlugIcon,
  TerminalIcon,
  GitCompareArrowsIcon,
  CheckIcon,
  DatabaseIcon
} from 'lucide-react';



export default async function HomePage() {
  const gridColor =
    'color-mix(in oklab, var(--color-fd-primary) 10%, transparent)';
  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 z-[2] lg:py-8">
        <div
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)',
          }}
        >
          <div className="relative">
            <Hero />
          </div>
          <Introduction />
          <Architecture />
          <div
            className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)',
            }}
          >
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Any tool that works with data
              <br />
              Should be fully Open Source
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="relative z-[2] flex flex-col border-x border-t bg-fd-card/80 px-6 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden max-lg:overflow-hidden">
      <div className="mb-8 space-y-4">
        <div className="inline-flex items-center rounded-full border bg-background px-4 py-1 text-sm text-muted-foreground max-md:mx-auto">
          🚀 Open Source, Now and Forever
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Build Smarter AI Applications
          <br />
          with <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Open-Source RAG</span>
        </h1>
        <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
          Connect your app to user data in minutes with self-hostable RAG pipelines.
          Harness AI-powered retrieval with enterprise-grade scalability.
        </p>
      </div>

      <div className="inline-flex flex-col gap-4 sm:flex-row max-md:mx-auto">
        <Button asChild size='lg' >
          <Link
            href="/docs"
          >
            <RocketIcon className="h-5 w-5" />
            Get Started
          </Link>
        </Button>
        <Button asChild size='lg' variant='outline'>
          <a
            href="https://github.com/Dcup-dev/dcup"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="h-5 w-5" />
            Star on GitHub
          </a>
        </Button>
      </div>

      <div className="mt-16 -mb-40 min-w-[800px] border lg:-mb-18 xl:min-w-[1100px] xl:-mx-24">
        <div className="relative overflow-hidden border shadow-2xl">
          <Image
            src="/dcup_dashboard.gif"
            alt="Dcup Dashboard Preview"
            width={1360}
            height={760}
            unoptimized={true}
            priority
            className={cn(
              'w-full select-none bg-muted/50 duration-1000 animate-in fade-in slide-in-from-bottom-12',
              'dark:[mask-image:linear-gradient(to_bottom,white_70%,transparent_90%)]'
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/0" />
        </div>
      </div>

      <div className="mx-auto mt-52 pb-5 grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {[
          { label: 'Open Source', icon: <CodeIcon className="h-6 w-6" /> },
          { label: 'Self-Hostable', icon: <ServerIcon className="h-6 w-6" /> },
          { label: 'Prebuilt Integrations', icon: <PlugIcon className="h-6 w-6" /> },
          { label: 'Developer First', icon: <TerminalIcon className="h-6 w-6" /> },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <div className="rounded-full border p-3 text-primary">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const badgeVariants = cva(
  'inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground',
);


function Introduction(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-x bg-background md:grid-cols-2">
      {/* Step 1: Ingest */}
      <div className="flex flex-col gap-4 border-t p-8 md:p-12">
        <div className="flex items-center gap-4">
          <div className={cn(badgeVariants(), "h-8 w-8 items-center justify-center p-0")}>
            1
          </div>
          <PlugIcon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold">Ingest & Connect</h3>
        <p className="text-muted-foreground">
          Seamlessly integrate with data sources using our pre-built connectors.
          Automatically sync documents from Google Drive ( more will add soon ).
        </p>
        <div className="mt-4 p-4 flex gap-4">
          <FaGoogleDrive className="h-6 w-6 text-primary" />
          <p>More soon..</p>
        </div>
      </div>

      {/* Step 2: Process */}
      <div className="flex flex-col gap-4 border-t p-8 md:p-12">
        <div className="flex items-center gap-4">
          <div className={cn(badgeVariants(), "h-8 w-8 items-center justify-center p-0")}>
            2
          </div>
          <GitCompareArrowsIcon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold">Chunk & Index</h3>
        <p className="text-muted-foreground">
          Automated document processing with AI-powered chunking,
          OpenAI embeddings, and hybrid indexing in Qdrant vector storage.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded border p-3 text-center">
            <div className="text-sm font-medium">Embedding Model</div>
            <div className="text-primary">OpenAI text-embedding-3</div>
          </div>
          <div className="rounded border p-3 text-center">
            <div className="text-sm font-medium">Vector Storage</div>
            <div className="text-primary">Qdrant Engine</div>
          </div>
        </div>
      </div>

      {/* Step 3: Retrieve */}
      <div className="col-span-full flex flex-col gap-6 border-t p-8 md:p-12">
        <div className="flex items-center gap-4">
          <div className={cn(badgeVariants(), "h-8 w-8 items-center justify-center p-0")}>
            3
          </div>
          <TerminalIcon className="h-6 w-6 text-primary" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Intelligent Retrieval</h3>
            <p className="text-muted-foreground">
              Powerful API endpoint with hybrid search, LLM re-ranking,
              and flexible filtering for precision results.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                "Hybrid Search",
                "LLM Re-ranking",
                "Entity Extraction",
                "Flexible Filtering",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* API Example */}
          <div className="rounded-lg border bg-[#0E0E11] p-6">
            <div className="mb-4 flex items-center gap-2 text-sm text-[#FAFAFA] font-medium">
              <CodeIcon className="h-4 w-4" />
              Retrieval API Example
            </div>
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                background: 'transparent',
                padding: 0,
                fontSize: '0.875rem'
              }}
            >
              {`POST /api/retrievals
"query": "AI security best practices",
"top_chunk": 5,
"rerank": true,
"filter": {
"source": "google-drive"
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="col-span-full grid grid-cols-2 gap-8 border-t p-8 md:grid-cols-4 md:p-12">
        {[
          {
            title: "Open Source",
            icon: <FaGithub className="h-6 w-6" />,
            description: "Apache 2.0 License"
          },
          {
            title: "Scalable",
            icon: <RocketIcon className="h-6 w-6" />,
            description: "Qdrant Vector Engine"
          },
          {
            title: "Multi-source",
            icon: <DatabaseIcon className="h-6 w-6" />,
            description: "PDFs"
          },
          {
            title: "Self-host",
            icon: <ServerIcon className="h-6 w-6" />,
            description: "Docker Support"
          },
        ].map((feature) => (
          <div key={feature.title} className="flex flex-col items-center gap-3 text-center">
            <div className="rounded-full border p-3 text-primary">
              {feature.icon}
            </div>
            <h4 className="font-medium">{feature.title}</h4>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Architecture() {
  return (
    <div className="flex flex-col gap-12 border-x border-t bg-background px-8 py-16 md:flex-row md:px-12 md:py-24">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Modular Architecture
          </span>
          <h2 className="text-3xl font-bold tracking-tight">
            Powered by Modern AI Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            Dcup combines cutting-edge technologies to deliver production-ready RAG capabilities.
            Built on OpenAI for intelligence, Qdrant for speed, and Redis for reliability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "OpenAI",
              icon: <AiFillOpenAI className="h-8 w-8" />,
              role: "AI Processing",
              description: "Advanced embeddings and query expansion using text-embedding-3 model",
              color: "text-[#412991]"
            },
            {
              name: "Qdrant",
              icon: <FaDatabase className="h-8 w-8" />,
              role: "Vector Engine",
              description: "Blazing-fast vector similarity search at scale",
              color: "text-[#2d5b8a]"
            },
            {
              name: "Redis",
              icon: <DiRedis className="h-8 w-8" />,
              role: "Real-time Cache",
              description: "Metadata storage and low-latency retrieval caching",
              color: "text-[#d82c20]"
            }
          ].map((tech) => (
            <div key={tech.name} className="space-y-4">
              <div className={`flex items-center gap-3 ${tech.color}`}>
                <div className="rounded-lg bg-background p-2">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
