// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Province } from "../../../models/province.model";
import { findAllProvince } from "../../../services/province.service";

// localhost:4000/api/province/
export default async function handler( req: NextApiRequest, res: NextApiResponse<Province[]>) {
 
  const provinces = await findAllProvince();

  res.status(200).json(provinces);
}
