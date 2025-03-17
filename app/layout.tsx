import './global.css';
import type { Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { GoogleAnalyticsScript } from './GoogleAnalyticsScript';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dcup - Open-Source RAG-as-a-Service Platform | AI-Powered Retrieval",
  metadataBase: new URL("https://dcup.dev"),
  description: "Deploy enterprise-grade RAG pipelines in minutes with Dcup's open-source platform. Connect to data sources, automate AI-powered indexing, and enable intelligent search with hybrid retrieval, entity extraction, and LLM re-ranking.",
  openGraph: {
    title: "Dcup - Self-Hostable RAG Platform for AI Applications",
    description: "Open-source RAG-as-a-Service with pre-built integrations, OpenAI embeddings, and Qdrant vector search. Enable secure, intelligent data retrieval in your applications.",
    url: "https://dcup.dev",
    siteName: "Dcup",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dcup RAG Architecture Diagram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dcup - Open-Source RAG-as-a-Service Platform",
    description: "Self-hostable AI retrieval pipeline with Google Drive integration, hybrid search, and OpenAI-powered embeddings. Enterprise RAG made simple.",
    images: ["/twitter-image.png"],
  },
  keywords: [
    "RAG-as-a-Service",
    "Open Source RAG",
    "Vector Search API",
    "AI Retrieval Pipeline",
    "Qdrant Vector Database",
    "OpenAI Embeddings",
    "Enterprise Search Solution",
    "Self-Hosted AI",
    "Document Indexing API",
    "Hybrid Semantic Search",
    "LLM Re-ranking",
    "Entity Extraction API",
    "Developer-First RAG",
    "Knowledge Base Search",
    "AI-Powered Chatbots",
  ],
  alternates: {
    canonical: "https://dcup.dev",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <GoogleAnalyticsScript />
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            links: [
              ['Home', '/'],
              ['Docs', '/docs'],
            ],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
