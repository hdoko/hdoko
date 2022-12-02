import Image from 'next/image'
import Link from 'next/link'
import { DoujinsResponse, Metadata } from '../pages/api/doujins'
import { getTimeAgo } from '../utils/date'
import { Single, Spanish } from './svgs'

const example = [
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
  {
    src: '/394393/1.jpg',
    ch: 34,
    name: 'Infant Regression Edition~ (Sakura Miko)',
    code: '#394393',
    date: '2022-11-23T23:51:44.514Z',
    fansu: 'dummie',
    artist: 'hachigo',
  },
]

export const url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'

const fetchFiles = async () => {
  const res = await fetch(`${url}/api/doujins?page=1`)
  const doujins: DoujinsResponse = await res.json()
  const a = await Promise.all(
    Object.values(doujins).map(({ urls, metadata }) =>
      fetch(metadata)
        .then((res) => res.json() as Promise<Metadata>)
        .then((metadata) => ({ metadata, urls }))
    )
  )

  return {
    a,
  }
}

export const Cards = async () => {
  const { a } = await fetchFiles()

  return (
    <ul className='grid grid-cols-4 gap-5'>
      {a.map(({ urls, metadata }, i) => (
        <li className='flex w-60 gap-1.5 rounded bg-[#1b1b1b]' key={i}>
          <Image
            src={urls[0]}
            alt={`${metadata.name} ${metadata.code}`}
            width={60}
            height={160}
            className='h-auto w-auto rounded-l'
            priority
          />
          <div className='relative flex flex-col justify-center overflow-hidden py-1.5 font-poopins'>
            <Link
              title={metadata.name}
              href={`/${metadata.code.replace('#', '')}`}
              className='overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold'
            >
              {metadata.name}
            </Link>
            <section className='flex items-center gap-1 text-xs'>
              <Spanish className='h-6 w-6' />
              <p>ch: {metadata.ch}</p>
              <span>-</span>
              <a
                href={`https://nhentai.net/g/${metadata.code.replace('#', '')}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                {metadata.code}
              </a>
            </section>
            <section className='flex items-center gap-0.5'>
              <Single className='h-5 w-5 fill-current text-white' />
              <p className='text-xs'>{metadata.fansu}</p>
            </section>
            <p className='absolute bottom-1 right-1 text-xs'>
              {getTimeAgo({
                date: new Date(metadata.date),
                opts: { numeric: 'always' },
              })}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
