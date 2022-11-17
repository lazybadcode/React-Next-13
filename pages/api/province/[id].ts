// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Province } from '../../../models/province.model'
import { deleteProvinceById, findProvinceById, updateProvinceById } from '../../../services/province.service'

type Data = {
  name: string
}

type ApiErrorResponse = {
  message : string
}
// http://localhost:2022/api/province/4
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Province | ApiErrorResponse>
) {
    const {
        query: { id },
        method,
      } = req
    
      switch (method) {
        case 'GET':
          // Get data from your database
          try{
            const province = await findProvinceById(+id!)
            if(!province){
              res.status(404).json({message:"Data Not Found"})
            }
            //res.status(200).json({ message: `Get Province by ${id}` })
            res.status(200).json(province!)
          }catch(err){
            res.status(500).json({message: "Other err"})
          }
          break
        case 'PUT':
          const {body: {name}} = req
          // Update or create data in your database
          const updateResult = await updateProvinceById(+id!, name)
          if(updateResult.affected === 0){

            res.status(400).json({message: "Error during update"})
          }
          res.status(200).json({ message: `Update Province by ${id} and ${name}` })
          break
        case 'DELETE':
          const deleteResult = await deleteProvinceById(+id!)
          if(deleteResult.affected === 0){

            res.status(400).json({message: "Error during date"})
          }
          res.status(200).json({ message: `Delete Province by ${id}` })
          break
        default:
          res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
          res.status(400).end(`Method ${method} Not Allowed`)
      }
}


