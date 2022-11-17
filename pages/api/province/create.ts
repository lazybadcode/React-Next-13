// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createProvince } from '../../../services/province.service';

type Data = {
  name: string
}

// http://localhost:2022/api/province/create
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const {
        body: { name },
        method,
      } = req
    
      switch (method) {
        case 'POST':
          const province = await createProvince(name);
          res.status(200).json(province);
          break
        default:
          res.setHeader('Allow', ['POST'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }

}


