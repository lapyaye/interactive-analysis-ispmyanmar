import type { Metadata } from 'next'
import Home from '@/app/components/blockage-survey/home'

export const metadata: Metadata = {
  title: "Raising the Lantern's Wick High",
  description:
    "A Survey of Myanmar's Socioeconomic Crisis and Public Resilience",
}

export default function Page() {
  return <Home />
}
