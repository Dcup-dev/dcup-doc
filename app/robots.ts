import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/', '/_middleware/'],
    },
    sitemap: 'https://dcup.dev/sitemap.xml',
  }
}
