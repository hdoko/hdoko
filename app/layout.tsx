import { ReactNode } from 'react'
import { Shrimp } from '../components'
import { pixelFont, poopinsFont, wildWordsFont } from './fonts'
import './styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='es'
      className={`${pixelFont.variable} ${wildWordsFont.variable} ${poopinsFont.variable}`}
    >
      <head />
      <body>
        <Shrimp className='h-16 w-16' />
        {children}
      </body>
    </html>
  )
}
