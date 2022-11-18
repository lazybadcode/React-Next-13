// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Province } from "../../../models/province.model";
import { countBlog, findAllBlog } from "../../../services/blog.service";

// localhost:4000/api/blog?page=1&pageSize=3
//many to one
export default async function handler( req: NextApiRequest, res: NextApiResponse<any>) {

    const {query:{page, pageSize}} = req;
    const blogs = await findAllBlog(Number(page),Number(pageSize)); //page, pageSize
    const totalRecord = await countBlog()
 
  res.status(200).json({
    total : totalRecord,
    blogs: blogs
  });
}
