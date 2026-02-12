import Link from 'next/link';
import Image from 'next/image';

import { blog } from '@/lib/source';
import { FiArrowRight, FiClock, FiTag } from 'react-icons/fi';

export default function Home() {
  const posts = blog.getPages();

  return (
    <main className="grow container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Latest Insights
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="group relative overflow-hidden rounded-xl bg-background/50 backdrop-blur-lg border border-gray-200/20 hover:border-primary/30 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2"
            style={{ viewTransitionName: 'blog-card' }}
          >
            {/* Optional image container - add if you have cover images */}
            <div className="h-48 bg-gray-800/30 overflow-hidden">
              <Image
                src={`/${post.file.name}.jpg`}
                alt={post.data.title}
                width={200}
                height={10}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              {/* Category and date */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <FiTag className="h-4 w-4" />
                  <span>{'General'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="h-4 w-4" />
                  <span>{'5 min read'}</span>
                </div>
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                {post.data.title}
              </h2>
              <p className="text-muted-foreground line-clamp-3 mb-6">
                {post.data.description}
              </p>

              {/* Read more */}
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Read article</span>
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl pointer-events-none transition-all duration-300" />
          </Link>
        ))}
      </div>
    </main>
  );
}
