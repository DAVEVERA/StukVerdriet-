'use client'

import { useState, useEffect, useRef } from 'react'

interface Episode {
  number: number
  title: string
  teaser: string
  fullText: string[]
  audioUrl: string
}

const episodes: Episode[] = [
  {
    number: 1,
    title: 'Het begin. Ons verhaal.',
    teaser: 'Twee mensen. Twee verliezen. Waarom beginnen we een podcast over iets wat zoveel pijn doet? En hoe leef je tot het allerlaatst — terwijl de wereld om je heen stilvalt?',
    fullText: [
      'Twee mensen. Twee verliezen. Waarom beginnen we een podcast over iets wat zoveel pijn doet?',
      'In deze eerste aflevering vertellen we wie we zijn, wat ons verbindt — en wat ons scheidt. Want rouw is nooit hetzelfde, ook niet als je het samen deelt.',
      'We gaan terug naar Eva en Tycho. Naar de diagnose, de ziekenhuisdagen, het leven dat langzaam veranderde van vorm. Naar wat palliatieve zorg voor ons betekende — en wat we misten, terwijl we niet eens wisten dat het er had kunnen zijn.',
      'Hoe leef je tot het allerlaatst? Eva en Tycho deden het op een manier die ons tot op de dag van vandaag raakt. Angst speelde een rol. Maar ook iets wat we moeilijk kunnen beschrijven: ontzag. Voor hun kracht. Voor hun keuze. Voor het leven dat ze leidden terwijl de wereld om hen heen stilviel.',
    ],
    audioUrl: '',
  },
  {
    number: 2,
    title: 'Loraine. Haar ouders. En de vraag die niemand hardop stelt.',
    teaser: 'Wanneer begint rouw — bij het overlijden, of al veel eerder? Loraine weet het. Ze leeft met de wetenschap dat haar tijd beperkt is. En haar ouders leven met haar mee.',
    fullText: [
      'Wanneer begint rouw? Bij het overlijden — of al veel eerder? Loraine weet het. Ze leeft al een tijd met de wetenschap dat haar tijd beperkt is. In deze aflevering schuiven ze alle drie aan: Loraine en haar ouders.',
      'Hoe gaat iemand om met de eigen sterfelijkheid op jonge leeftijd? En hoe ga jij als ouder om met het aanstaande verlies van je kind — terwijl je kind er nog is, terwijl je je kind wilt beschermen, terwijl je zelf ook kapotgaat?',
      'Spreken Loraine en haar ouders hierover met elkaar? Wat zeggen ze wel, en wat blijft onuitgesproken? En hoe zorg je dat je elkaar niet kwijtraakt — juist in de periode dat je het hardst nodig hebt?',
      'Palliatieve zorg speelt hierin een rol. Maar welke? Wat heeft Loraine eraan? En wat zou ze graag anders zien?',
    ],
    audioUrl: '',
  },
  {
    number: 3,
    title: 'Rouw is rauw. En niemand vertelt je dat.',
    teaser: 'Er zijn dingen die niemand je vertelt als je iemand verliest. Over wat rouw doet met je lichaam. Over de mensen die ineens verdwijnen. Over de woorden die snijden als messen.',
    fullText: [
      'Er zijn dingen die niemand je vertelt als je iemand verliest. Over wat rouw doet met je lichaam. Over de mensen die ineens verdwijnen. Over de goedbedoelde woorden die snijden als messen.',
      'In deze aflevering gaan we in op de taboes rondom rouw en palliatieve zorg. Op de hulp die er wel is — en de hulp die er niet is, terwijl je er zo naar zoekt.',
      'We geven concrete handvatten: vanaf het moment van de diagnose. Rondom het overlijden. En in de stille, donkere periode daarna. Over de fysieke gevolgen van rouw — iets waar bijna niemand het over heeft.',
      'Want hoe help je iemand écht? Niet met bloemen en "sterkte". Maar met aanwezigheid, eerlijkheid en de moed om er te blijven.',
    ],
    audioUrl: '',
  },
  {
    number: 4,
    title: 'De vergeten rouwenden: broers, zussen en vrienden.',
    teaser: 'Er wordt gesproken over de patiënt. Over de ouders. Maar wie vraagt naar de broers en zussen? Wie vraagt naar de vrienden? Voor hen is er bijna niets.',
    fullText: [
      'Er wordt gesproken over de patiënt. Over de ouders. Maar wie vraagt naar de broers en zussen? Wie vraagt naar de vrienden?',
      'Aya is er niet meer. Maar haar broers, zussen en vrienden dragen haar nog elke dag. In stilte. Zonder plek. Want voor hen is er bijna niets.',
      'Vrienden die hun eigen verdriet wegdrukken — omdat ze "maar vrienden" zijn. Die zichzelf niet willen opdringen aan de familie. Die hun eigen pijn opzij zetten, terwijl niemand vraagt hoe het met hen gaat.',
      'Broers en zussen die nergens terecht kunnen — want de aandacht gaat altijd naar de ouders. In deze aflevering geven we hen het woord. Over IPSO, Toon Hermans huis, en alles wat er nog niet is. Over wat palliatieve zorg voor deze groep wél en niet biedt — en wat er hard nodig is.',
    ],
    audioUrl: '',
  },
  {
    number: 5,
    title: 'Wat de dokter je nooit vertelt. Maar wat je altijd wilde weten.',
    teaser: 'Wat gaat er om in een dokter die elke dag met de dood werkt? Wat zeg je tegen iemand die palliatieve zorg krijgt — en wat zeg je juist níet?',
    fullText: [
      'Wat gaat er om in een dokter die elke dag met de dood werkt? Hoe vertelt een oncoloog een patiënt dat er geen behandeling meer is? En hoe houd je als psycholoog contact met iemand die steeds verder wegglijdt?',
      'We zitten aan tafel met de mensen die het van dichtbij meemaken — professioneel, maar ook menselijk. Wat zeg je tegen iemand die palliatieve zorg krijgt? Wat zeg je juist níét? En hoe blijf je als buitenstaander in verbinding, als je niet weet wat je moet doen?',
      'Hoe blijf je praten — met de patiënt, met de naasten, met jezelf? En wat betekent het als de verbinding verbreekt?',
      'Deze aflevering geeft antwoorden op vragen die je altijd had maar nooit durfde te stellen.',
    ],
    audioUrl: '',
  },
  {
    number: 6,
    title: 'Een jaar later. En dan?',
    teaser: 'Na een jaar verwacht de wereld dat je "er doorheen bent". Maar rouw heeft geen eindpunt. En de toekomst die je samen had bedacht — die is er ook niet meer.',
    fullText: [
      'Na een jaar verwacht de wereld dat je "er doorheen bent". Maar rouw heeft geen eindpunt. Rouw verandert alleen van vorm.',
      'In de laatste aflevering keren we terug. Hoe is het nu? Hoe gaat de omgeving om met iemand die rouwt — een jaar later, als de bloemen lang zijn verwelkt en de wereld gewoon doorging?',
      'Over de onhandigheden. Het vermijden. Het niet weten wat te zeggen — of het juist te veel zeggen. Over de mensen die je nooit meer ziet, omdat ze niet meer weten hoe ze met je om moeten gaan.',
      'En over wat er verdwenen is. Niet alleen de persoon. Maar de toekomst die je samen had bedacht. De plannen. De vanzelfsprekendheid. Hoe bouw je een leven als het fundament eronder is weggeslagen?',
    ],
    audioUrl: '',
  },
]

function EpisodeModal({ episode, onClose }: { episode: Episode; onClose: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  function formatTime(s: number) {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F7F4F0] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="h-1 bg-gradient-to-r from-[#78A179] via-[#708090]/40 to-transparent shrink-0" />

        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-7 pb-5 border-b border-[#2F4F4F]/10 shrink-0">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#78A179] mb-1">
              Aflevering {String(episode.number).padStart(2, '0')}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2F4F4F] leading-snug max-w-lg">
              {episode.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2F4F4F]/10 hover:bg-[#2F4F4F]/20 text-[#2F4F4F] transition-colors shrink-0 ml-4 mt-1"
            aria-label="Sluiten"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-8 py-6 flex flex-col gap-4 flex-1">
          {episode.fullText.map((para, i) => (
            <p key={i} className="text-[#2F4F4F]/80 leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Player */}
        <div className="px-8 pb-4 shrink-0 border-t border-[#2F4F4F]/10 pt-5">
          {episode.audioUrl ? (
            <>
              <audio
                ref={audioRef}
                src={episode.audioUrl}
                onTimeUpdate={() => {
                  const a = audioRef.current
                  if (a) setProgress(a.currentTime)
                }}
                onLoadedMetadata={() => {
                  const a = audioRef.current
                  if (a) setDuration(a.duration)
                }}
                onEnded={() => setPlaying(false)}
              />
              <div className="flex flex-col gap-3">
                {/* Seekbar */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#2F4F4F]/50 font-mono w-10 shrink-0">{formatTime(progress)}</span>
                  <input
                    type="range"
                    min={0}
                    max={duration || 1}
                    value={progress}
                    onChange={e => {
                      const val = Number(e.target.value)
                      if (audioRef.current) audioRef.current.currentTime = val
                      setProgress(val)
                    }}
                    className="flex-1 h-1.5 rounded-full accent-[#78A179] cursor-pointer"
                  />
                  <span className="text-xs text-[#2F4F4F]/50 font-mono w-10 text-right shrink-0">{formatTime(duration)}</span>
                </div>
                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => { if (audioRef.current) audioRef.current.currentTime -= 15 }}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[#2F4F4F]/60 hover:text-[#2F4F4F] hover:bg-[#2F4F4F]/10 transition-colors"
                    aria-label="15 seconden terug"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                      <text x="7.5" y="15.5" fontSize="5" fill="currentColor" fontFamily="sans-serif">15</text>
                    </svg>
                  </button>
                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-[#78A179] hover:bg-[#688a68] text-white flex items-center justify-center shadow-lg shadow-[#78A179]/30 transition-all hover:scale-105 active:scale-95"
                    aria-label={playing ? 'Pauzeren' : 'Afspelen'}
                  >
                    {playing ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => { if (audioRef.current) audioRef.current.currentTime += 15 }}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[#2F4F4F]/60 hover:text-[#2F4F4F] hover:bg-[#2F4F4F]/10 transition-colors"
                    aria-label="15 seconden vooruit"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z"/>
                      <text x="7.5" y="15.5" fontSize="5" fill="currentColor" fontFamily="sans-serif">15</text>
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 bg-[#2F4F4F]/5 rounded-2xl">
              <svg className="w-4 h-4 text-[#2F4F4F]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
              </svg>
              <p className="text-sm text-[#2F4F4F]/40 font-medium">Aflevering volgt binnenkort</p>
            </div>
          )}
        </div>

        {/* Dankbetuiging */}
        <div className="px-8 pb-7 shrink-0">
          <p className="text-center text-xs text-[#2F4F4F]/40 font-medium tracking-wide">
            Met speciale dank aan{' '}
            <a
              href="https://pznl.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78A179] hover:underline font-semibold"
            >
              PZNL.NL
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function EpisodeSection() {
  const [selected, setSelected] = useState<Episode | null>(null)

  return (
    <>
      <section className="container mx-auto px-6 max-w-7xl pt-16 pb-24 space-y-10">
        <div className="border-b border-primary/10 pb-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Luister de podcast</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {episodes.map((episode) => (
            <button
              key={episode.number}
              onClick={() => setSelected(episode)}
              className="group text-left flex flex-col bg-white border border-primary/8 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-foreground/6 hover:-translate-y-1 transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A179]"
            >
              <div className="h-[3px] bg-gradient-to-r from-[#78A179]/70 via-secondary/40 to-transparent" />
              <div className="p-7 flex flex-col flex-1 gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#78A179]">
                  Afl. {String(episode.number).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-[#78A179] transition-colors leading-snug">
                  {episode.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed flex-1">
                  {episode.teaser}
                </p>
                <div className="pt-4 border-t border-primary/8 mt-auto flex items-center gap-2 text-[#78A179] font-bold text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#78A179] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span>Luister nu</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selected && <EpisodeModal episode={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
