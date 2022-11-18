import { DeleteResult, UpdateResult } from "typeorm";
import { connectDB } from "../lib/db";
import { Province } from "../models/province.model";

export async function findAllProvince(): Promise<Province[]>{
    const provinceRepository = await (await connectDB()).getRepository(Province)
    return await provinceRepository.find({order:{id:'DESC'}})

}
export async function findProvinceById(id:number): Promise<Province | null >{
    const provinceRepository = await (await connectDB()).getRepository(Province)
    return await provinceRepository.findOneBy({id : id})

}
export async function createProvince(name:string): Promise<Province | null >{
    const provinceRepository = await (await connectDB()).getRepository(Province)
    const province = provinceRepository.create({name:name})
    const newProvince = await provinceRepository.save(province)
    return newProvince
    
}
export async function updateProvinceById(id:number, name:string): Promise<UpdateResult >{
    const provinceRepository = await (await connectDB()).getRepository(Province)
    const provinceUpdate=  await provinceRepository.update(id , {name : name})
    return provinceUpdate
}

export async function deleteProvinceById(id:number): Promise<DeleteResult >{
    const provinceRepository = await (await connectDB()).getRepository(Province)
    return await provinceRepository.delete(id)

}