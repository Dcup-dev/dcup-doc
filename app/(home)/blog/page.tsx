import Link from 'next/link';
import Image from 'next/image';
import { blog } from '@/lib/source';
import { ArrowRight, Clock3, Sparkles, Tag } from 'lucide-react';

export default function BlogHome() {
  const posts = blog.getPages();

  return (
    <main className="container mx-auto max-w-6xl px-4 pb-16 pt-12">
      <section className="mb-10 rounded-2xl border bg-gradient-to-r from-primary/10 via-background to-pink-500/10 p-8">
        <p className="mb-2 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Fresh insights for builders
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Dcup Blog</h1>
        <p className="max-w-2xl text-muted-foreground">
          Product, AI retrieval, infrastructure, and growth playbooks to help you ship faster and convert better.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <Link
            key={post.url}
            href={post.url}
            className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            style={{ animation: `fadeSlideIn 0.55s ease-out ${idx * 0.07}s both` }}
          >
            <div className="h-52 overflow-hidden border-b">
              <Image
                src={`/${post.file.name}.jpg`}
                alt={post.data.title}
                width={640}
                height={320}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-primary">
                  <Tag className="h-3 w-3" /> General
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-muted-foreground">
                  <Clock3 className="h-3 w-3" /> 5 min read
                </span>
              </div>
              <h2 className="mb-2 text-xl font-semibold leading-tight">{post.data.title}</h2>
              <p className="mb-5 line-clamp-3 text-sm text-muted-foreground">{post.data.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
