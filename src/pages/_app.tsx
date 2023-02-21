import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Noto_Sans_Thai } from '@next/font/google'

const noto = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${noto.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
