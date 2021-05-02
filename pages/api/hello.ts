import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()

type Data = {
  name: string
}

handler.get((req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'Ran Tayar' })
})

export default handler
