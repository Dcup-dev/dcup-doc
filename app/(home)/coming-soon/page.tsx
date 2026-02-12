'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');



  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('Submitting...');


    try {
      if (!validateEmail(email)) {
        throw new Error("invalid email provided")
      }
      await supabase.from("waitlist").insert({ email, thoughts })
      setStatus('success');
      setMessage('You are on the list! We will reach out before launch.');
      setEmail('');
      setThoughts('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(236,72,153,0.15),transparent_30%),linear-gradient(to_bottom,rgba(99,102,241,0.08),transparent_35%)]" />

      <section className="container mx-auto max-w-6xl px-4 pb-20 pt-14 md:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Coming Soon
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl md:leading-tight">
              dcup – Your Data, Smarter. <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Coming Soon.</span>
            </h1>

            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              Unlock the power of your data with dcup – the open-source AI assistant platform built for developers. Connect PDFs, web pages, Notion notes, and more in minutes, and turn them into searchable, actionable intelligence.
            </p>

            <div className="space-y-3 rounded-2xl border bg-background/80 p-5 backdrop-blur">
              {[
                'Connect docs, sites, and notes in minutes',
                'Search and reason over your data with confidence',
                'Built open-source for developer control and flexibility',
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <Button asChild variant="outline">
              <Link href="/docs" className="inline-flex items-center gap-2">
                Explore existing docs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-2xl md:p-8">
            <h2 className="mb-2 text-2xl font-bold">Join the early-access waitlist</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Leave your email and thoughts. We are collecting interest to prioritize launch features.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                  className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none ring-offset-background transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="thoughts" className="text-sm font-medium">What would you like dcup to solve for you? (optional)</label>
                <textarea
                  id="thoughts"
                  value={thoughts}
                  onChange={(event) => setThoughts(event.target.value)}
                  placeholder="Tell us your data challenges, integrations, or ideal workflow..."
                  rows={6}
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white">
                {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
              </Button>

              {status !== 'idle' && (
                <p
                  className={`rounded-md px-3 py-2 text-sm ${status === 'success'
                    ? 'border border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400'
                    : status === 'error'
                      ? 'border border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400'
                      : 'border border-primary/30 bg-primary/10 text-primary'
                    }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
