import AboutSusan from '@/components/AboutSusan'
import Image from 'next/image'
import InstagramGrid from '@/components/InstagramGrid'
import PalliatieveZorgExplainer from '@/components/PalliatieveZorgExplainer'
import EpisodeSection from '@/components/EpisodeSection'

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[100svh] min-h-[640px] flex items-center bg-gray-900">
        <Image
          src="/images/herostartbutterfly.png"
          alt="Stukverdriet"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Gradient alleen links zodat vlinder rechts zichtbaar blijft */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-24">
          <div className="max-w-lg drop-shadow-xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-[#78A179]/80" />
              <p className="text-[#78A179] text-[10px] font-bold uppercase tracking-[0.28em]">Podcast</p>
            </div>
            <h1 className="font-serif text-white font-bold leading-[1.2] drop-shadow-lg">
              <span className="block text-[28px] sm:text-[36px] md:text-[44px]">Tussen leven</span>
              <span className="block text-[28px] sm:text-[36px] md:text-[44px]">en loslaten.</span>
              <span className="block text-[28px] sm:text-[36px] md:text-[44px] text-[#78A179]">En dat wat overblijft.</span>
            </h1>
            <div className="w-16 h-[3px] bg-[#78A179] rounded-full" />
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
              Een podcast over palliatieve zorg.<br />
              Over rouw. Over afscheid.<br />
              Over leven tot het allerlaatst.
            </p>
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
