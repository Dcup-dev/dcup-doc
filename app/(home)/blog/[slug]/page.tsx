import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, UserCircle2 } from 'lucide-react';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <main className="container mx-auto max-w-6xl px-4 pb-16 pt-8 md:pt-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog" className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <article className="rounded-2xl border bg-background p-6 md:p-10">
        <header className="mb-10 border-b pb-8">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">{page.data.title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{page.data.description}</p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
              <UserCircle2 className="h-4 w-4" /> {page.data.author}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-muted-foreground">
              <Calendar className="h-4 w-4" /> {new Date(page.data.date).toLocaleDateString()}
            </span>
          </div>
        </header>

        <div className="grid gap-10 md:grid-cols-[250px_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-24 rounded-xl border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold">On this page</h3>
              <InlineTOC items={page.data.toc} />
            </div>
          </aside>

          <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-primary">
            <Mdx components={defaultMdxComponents} />
          </div>
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
