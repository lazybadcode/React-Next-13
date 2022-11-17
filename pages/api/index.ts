// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../lib/db";
import { Province } from "../../models/province.model";
import { findAllProvince } from "../../services/province.service";

type Data = {
  name: string;
};

// localhost:4000/api/hello
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const provinces = await findAllProvince();
  res.status(200).json(provinces)
}
