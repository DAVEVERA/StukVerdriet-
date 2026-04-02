'use client'

import Script from 'next/script'

export default function InstagramGrid() {
  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media w-full max-w-xl"
        data-instgrm-permalink="https://www.instagram.com/stuk_verdriet/"
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', minWidth: '326px', padding: 0 }}
      />
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}
