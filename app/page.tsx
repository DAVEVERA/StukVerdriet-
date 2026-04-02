import AboutSusan from '@/components/AboutSusan'
import Image from 'next/image'
import InstagramGrid from '@/components/InstagramGrid'
import PalliatieveZorgExplainer from '@/components/PalliatieveZorgExplainer'
import EpisodeSection from '@/components/EpisodeSection'

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[600px] md:h-[750px] flex items-center bg-gray-900 border-b border-white/10">
        <Image
          src="/images/herostartbutterfly.png"
          alt="Stukverdriet"
          fill
          priority
          className="object-cover opacity-80 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-20">
          <div className="max-w-2xl drop-shadow-xl space-y-4">
            <h1 className="font-serif text-[22px] sm:text-[26px] md:text-[32px] text-white leading-[1.4] font-semibold">
              Palliatieve zorg: Tussen leven, loslaten en dat wat over blijft.
            </h1>
            <div className="w-24 sm:w-32 h-[3px] bg-[#78A179]" />
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
