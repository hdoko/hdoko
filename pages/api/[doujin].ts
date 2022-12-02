import type { NextApiRequest, NextApiResponse } from 'next'
import { getFiles, getSignedUrl } from '../../utils/storage'
import { DoujinsResponse } from './doujins'

type Query = {
  doujin?: string
  page?: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<DoujinsResponse>
) => {
  const { doujin, page } = req.query as Query
  const prefix = `${doujin}/`
  const { files } = await getFiles({ prefix, page: Number(page) })
  const { signedUrl } = await getSignedUrl({ files })

  res.status(200).json(signedUrl)
}

export default handler
