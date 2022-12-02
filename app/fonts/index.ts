import local from '@next/font/local'
import { Poppins } from '@next/font/google'

export const pixelFont = local({
  src: './04b03b.ttf',
  variable: '--pixel-font',
})

export const wildWordsFont = local({
  src: './wildwordsroman.ttf',
  variable: '--wild-words-font',
})

export const poopinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  variable: '--poppins-font',
})
