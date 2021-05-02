import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/launches/next')

  res.status(200).json(data)
}
