// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Province } from "../../../models/province.model";

// localhost:4000/api/province/
export default async function handler( req: NextApiRequest, res: NextApiResponse<any>) {


  
 
  res.status(200).json({});
}
