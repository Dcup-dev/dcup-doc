import { Sparkles } from 'lucide-react'
import React from 'react'
import Link from "next/link";

type Props = {
  text: string,
  actionTitle: string,
  actionLink: string
}

export const Announcement = ({ text, actionLink, actionTitle }: Props) => {
  return (
    <Link
      href={actionLink}
      className="relative block w-full overflow-hidden border-b border-primary/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 px-4 py-2 text-center text-sm font-semibold text-white"
    >
      <span className="inline-flex items-center gap-2">
        <Sparkles className="h-4 w-4" />
        {text}
        <span className="rounded-full border border-white/40 bg-white/10 px-2 py-0.5 text-xs">{actionTitle}</span>
      </span>
    </Link>
  )
}
