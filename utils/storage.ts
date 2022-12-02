import { DoujinsResponse } from '../pages/api/doujins'
import { bucket } from './firebase.server'

type FileStorage = ReturnType<typeof bucket['file']>
type Cfg = Parameters<FileStorage['getSignedUrl']>[0] // what is callback [GetSignedUrlConfig, GetSignedUrlCallback]

const getObjectFromBucket = ({ files }: { files: FileStorage[] }) => {
  const map = new Map<string, { [key: string]: FileStorage }>()

  files
    .filter((file) => !file.name.endsWith('/'))
    .forEach((file) => {
      const [doujin, page] = file.name.split('/')

      map.set(doujin, {
        ...map.get(doujin),
        [page]: file,
      })
    })

  return {
    filesObject: Object.fromEntries(map),
  }
}

type GetFilesProps = {
  prefix?: string
  page?: number
}
export const getFiles = async ({ prefix, page }: GetFilesProps) => {
  const [files] = await bucket.getFiles({ prefix })
  const filterPages = files.filter(
    (file) =>
      file.name.includes('.json') ||
      Number(file.name.split('/').at(-1)?.replace('.jpg', '')) === page
  )

  const { filesObject } = getObjectFromBucket({
    files: page ? filterPages : files,
  })

  return {
    files: filesObject,
  }
}

type GetSignedUrlProps = {
  files: Awaited<ReturnType<typeof getFiles>>['files']
  cfg?: Cfg
}
export const getSignedUrl = async ({ files, cfg }: GetSignedUrlProps) => {
  const opts = cfg ?? { action: 'read', expires: '03-09-2491' }

  const rootKeys = Object.keys(files)
  const rootValues = Object.values(files)
  const doujins = rootValues.map((pages) => Object.values(pages))
  const doujinsUrls = await Promise.all(
    doujins.map((pages) =>
      Promise.all(
        pages.map((page) => page.getSignedUrl(opts).then(([url]) => url))
      ).then((urls) => {
        const [metadata] = urls.filter((url) => url.includes('.json'))
        const pageUrls = urls.filter((url) => url.includes('.jpg'))

        return {
          metadata,
          urls: pageUrls,
        }
      })
    )
  )

  const entries: [string, { metadata: string; urls: string[] }][] = rootKeys.map((key, i) => [key, doujinsUrls[i]])
  const signedUrl = Object.fromEntries(entries)

  return {
    signedUrl,
  }
}
