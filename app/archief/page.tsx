'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { usePlayerStore } from '@/store/usePlayerStore'
import Image from 'next/image'

const mockEpisodes = [
  { id: 1, title: 'Afl 1: Het begin', description: 'De eerste aflevering over het begin van rouw en wat je kunt verwachten.', audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', tags: ['Intro', 'Rouw'] },
  { id: 2, title: 'Afl 2: Het ziekenhuis', description: 'Over de diagnose, de wachtkamers en de stilte daarna.', audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', tags: ['Behandeling'] },
]
const allTags = ['Intro', 'Rouw', 'Behandeling', 'Verwerking']

function ArchiefContent() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''
  const { playEpisode } = usePlayerStore()

  const filtered = mockEpisodes.filter(e => {
    const matchesTag = activeTag ? e.tags.includes(activeTag) : true
    const matchesQuery = query
      ? e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query)
      : true
    return matchesTag && matchesQuery
  })

  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full h-[100svh] min-h-[600px] bg-gray-900">
        <Image src="/images/stukverdriet_hero2.png" alt="Thema's & Archief" fill priority className="object-cover object-center opacity-80" />
        {/* Mobiel: gradient van onderen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:hidden" />
        {/* Desktop: gradient van links */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Mobiel: tekst onderaan */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:hidden">
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-[#78A179]/80" />
              <p className="text-[#78A179] text-[9px] font-bold uppercase tracking-[0.28em]">Afleveringen</p>
            </div>
            <h1 className="font-serif text-white font-bold leading-[1.15] drop-shadow-lg">
              <span className="block text-[30px]">Alle afleveringen.</span>
              <span className="block text-[30px]">Op thema.</span>
              <span className="block text-[30px] text-[#78A179]">Op gevoel.</span>
            </h1>
            <div className="w-12 h-[2px] bg-[#78A179] rounded-full" />
            <p className="text-white/65 text-[15px] leading-relaxed font-light">
              Zoek op wat bij jou past.<br />
              Luister op je eigen tempo.<br />
              Vind wat je nodig hebt.
            </p>
          </div>
        </div>

        {/* Desktop: tekst links */}
        <div className="hidden md:flex absolute inset-0 z-10 items-center">
          <div className="container mx-auto px-6 max-w-7xl pt-20">
            <div className="max-w-lg space-y-5 drop-shadow-xl">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-[#78A179]/80" />
                <p className="text-[#78A179] text-[10px] font-bold uppercase tracking-[0.28em]">Afleveringen</p>
              </div>
              <h1 className="font-serif text-white font-bold leading-[1.2]">
                <span className="block text-[40px] lg:text-[52px]">Alle afleveringen.</span>
                <span className="block text-[40px] lg:text-[52px]">Op thema.</span>
                <span className="block text-[40px] lg:text-[52px] text-[#78A179]">Op gevoel.</span>
              </h1>
              <div className="w-16 h-[3px] bg-[#78A179] rounded-full" />
              <p className="text-white/70 text-lg leading-relaxed font-light">
                Zoek op wat bij jou past.<br />
                Luister op je eigen tempo.<br />
                Vind wat je nodig hebt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 max-w-5xl pt-16 pb-24 space-y-10">

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${!activeTag ? 'bg-foreground text-background border-foreground' : 'bg-white text-foreground/60 border-primary/15 hover:border-foreground/30 hover:text-foreground'}`}
          >
            Alles
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeTag === tag ? 'bg-secondary text-white border-secondary' : 'bg-white text-foreground/60 border-primary/15 hover:border-secondary/30 hover:text-secondary'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Episode list */}
        <div className="flex flex-col gap-4">
          {filtered.map((ep, index) => (
            <article
              key={ep.id}
              className="group flex flex-col sm:flex-row justify-between sm:items-center gap-5 p-7 border border-primary/10 rounded-2xl bg-white hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#78A179]">
                    Afl. {String(index + 1).padStart(2, '0')}
                  </span>
                  {ep.tags.map(t => (
                    <span key={t} className="px-2.5 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif font-bold text-xl mb-1.5 text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                  {ep.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed line-clamp-2">{ep.description}</p>
              </div>
              <button
                onClick={() => playEpisode(ep.audio_url, ep.title)}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Speel af
              </button>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="py-24 text-center border-2 border-dashed border-primary/15 rounded-2xl">
              <p className="font-serif text-xl text-primary/60">Geen afleveringen gevonden.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function Archief() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-primary/60 font-serif text-xl">Laden…</div>}>
      <ArchiefContent />
    </Suspense>
  )
}
