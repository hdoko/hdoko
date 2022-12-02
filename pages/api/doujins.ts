import type { NextApiRequest, NextApiResponse } from 'next'
import { getFiles, getSignedUrl } from '../../utils/storage'

type Query = {
  page?: string
}

export type Metadata = {
  ch: number
  name: string
  code: string
  date: string
  fansu: string
  artist: string
}

export type DoujinsResponse<T = string> = {
  [key: string]: {
    urls: string[]
    metadata: T
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<DoujinsResponse>
) => {
  const { page } = req.query as Query
  const { files } = await getFiles({ page: Number(page) })
  const { signedUrl } = await getSignedUrl({ files })

  res.status(200).json(signedUrl)
}

export default handler
