import AboutSusan from '@/components/AboutSusan'
import Image from 'next/image'
import InstagramGrid from '@/components/InstagramGrid'
import PalliatieveZorgExplainer from '@/components/PalliatieveZorgExplainer'
import EpisodeSection from '@/components/EpisodeSection'

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[100svh] min-h-[600px] bg-gray-900">

        {/* Mobiel: gecropte portret versie met vlinder centraal */}
        <Image
          src="/images/herostartbutterfly_mobile.jpg"
          alt="Stukverdriet"
          fill
          priority
          className="object-cover object-center opacity-95 md:hidden"
        />
        {/* Desktop: originele landscape versie */}
        <Image
          src="/images/herostartbutterfly.png"
          alt="Stukverdriet"
          fill
          priority
          className="object-cover object-center opacity-95 hidden md:block"
        />

        {/* Mobiel: gradient van onderen zodat vlinder bovenin vrij blijft */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:hidden" />

        {/* Desktop: gradient van links, vlinder rechts vrij */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Mobiel: tekst onderaan */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:hidden">
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-[#78A179]/80" />
              <p className="text-[#78A179] text-[9px] font-bold uppercase tracking-[0.28em]">Podcast</p>
            </div>
            <h1 className="font-serif text-white font-bold leading-[1.15] drop-shadow-lg">
              <span className="block text-[30px]">Tussen leven,</span>
              <span className="block text-[30px]">loslaten</span>
              <span className="block text-[30px] text-[#78A179]">en dat wat overblijft.</span>
            </h1>
            <div className="w-12 h-[2px] bg-[#78A179] rounded-full" />
            <p className="text-white/65 text-[15px] leading-relaxed font-light">
              Over palliatieve zorg, rouw en afscheid.
            </p>
          </div>
        </div>

        {/* Desktop: tekst links, verticaal gecentreerd */}
        <div className="hidden md:flex absolute inset-0 z-10 items-center">
          <div className="container mx-auto px-6 max-w-7xl pt-20">
            <div className="max-w-lg space-y-5 drop-shadow-xl">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-[#78A179]/80" />
                <p className="text-[#78A179] text-[10px] font-bold uppercase tracking-[0.28em]"></p>
              </div>
              <h1 className="font-serif text-white font-bold leading-[1.2]">
                <span className="block text-[40px] lg:text-[52px]">Tussen leven,</span>
                <span className="block text-[40px] lg:text-[52px]"> loslaten</span>
                <span className="block text-[40px] lg:text-[52px] text-[#78A179]">En dat wat overblijft.</span>
              </h1>
              <div className="w-16 h-[3px] bg-[#78A179] rounded-full" />
              <p className="text-white/70 text-lg leading-relaxed font-light">
                Een podcast over rouw.<br />
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ── Explainer / Mission ─────────────────────────────────── */}
      <PalliatieveZorgExplainer />

      {/* ── Episodes ─────────────────────────────────────────── */}
      <EpisodeSection />

      {/* ── Over Susan ───────────────────────────────────────── */}
      <AboutSusan />

      {/* ── Instagram ────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-7xl pb-24">
        <InstagramGrid />
      </section>

    </div>
  )
}
