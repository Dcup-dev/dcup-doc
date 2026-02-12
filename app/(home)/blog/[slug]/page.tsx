import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { Button } from '@/components/ui/button';
import { FiArrowLeft, FiCalendar, FiUser } from 'react-icons/fi';
 

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  
  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <div className="container py-8 md:py-12 px-4">
      <Button 
        variant="ghost" 
        asChild 
        className="mb-8 group hover:bg-primary/10 transition-colors"
      >
        <Link href="/blog" className="flex items-center gap-2">
          <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </Button>

      <article className="relative">
        {/* Article Header */}
        <div className="mb-8 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {page.data.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {page.data.description}
          </p>
          
          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
              <FiUser className="h-4 w-4" />
              <span>{page.data.author}</span>
            </div>
            <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
              <FiCalendar className="h-4 w-4" />
              <span>{new Date(page.data.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          {/* Sticky TOC */}
          <div className="hidden md:block sticky top-24 self-start">
            <div className="border-l-2 pl-4">
              <h3 className="text-sm font-semibold mb-4">Table of Contents</h3>
              <InlineTOC 
                items={page.data.toc} 
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Mdx components={defaultMdxComponents} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t">
          <Button variant="outline" asChild>
            <Link href="/blog" className="gap-2">
              <FiArrowLeft className="h-4 w-4" />
              Back to All Articles
            </Link>
          </Button>
        </div>
      </article>
    </div>
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
