import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import axios from 'axios'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get(async (req, res) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/launches/next')

  res.status(200).json(data)
})

export default handler
