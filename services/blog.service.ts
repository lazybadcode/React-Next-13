import { connectDB } from "../lib/db";
import { Blog } from "../models/blog.model";

//many to one
export async function findAllBlog(page=1, pageSize=2): Promise<any>{
    const blogRepository = await (await connectDB()).getRepository(Blog)
    return await blogRepository.find(
        {
            // default left join
            // select some fields of table blogs + users
            relations: {
                user: true
            },
            skip: (page-1) * pageSize,
            take: pageSize,
            order:{id:'DESC'}
        }
    )
}

export async function countBlog(){
    const blogRepository = await (await connectDB()).getRepository(Blog)
    return await blogRepository.count();
}



/*

import { connectDB } from "../lib/db";
import { Blog } from "../models/blog.model";

//many to one -- inner join
export async function findAllBlog(): Promise<any>{
    const blogRepository = await (await connectDB()).getRepository(Blog)
    return await blogRepository.createQueryBuilder("blog")
        .innerJoinAndSelect("blog.user", "user") //user in blog.model
        .select(["blog", "user.id", "user.fullname"])
        .getMany();
                            
}

*/