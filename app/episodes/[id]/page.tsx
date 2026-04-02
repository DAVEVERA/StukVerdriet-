import { Metadata } from 'next'
import { sql } from '@vercel/postgres'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { rows } = await sql<{ title: string; description: string }>`
      SELECT title, description FROM episodes WHERE id = ${Number(params.id)} LIMIT 1
    `
    const episode = rows[0]
    if (!episode) throw new Error('Not found')

    return {
      title: `${episode.title} | Stuk Verdriet`,
      description: episode.description,
      openGraph: {
        title: episode.title,
        description: episode.description,
        url: `https://stukverdriet.nl/episodes/${params.id}`,
        siteName: 'Stuk Verdriet',
        images: [
          {
            url: 'https://stukverdriet.nl/og-image.jpg',
            width: 1200,
            height: 630,
          }
        ],
        type: 'website',
      },
    }
  } catch {
    return {
      title: 'Stuk Verdriet',
    }
  }
}

export default async function EpisodePage() {
  return null
}
