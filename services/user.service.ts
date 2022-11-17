import * as argon2 from "argon2"
import { connectDB } from "../lib/db"
import { User } from "../models/user.model"



export async function findByEmailUser(email: string): Promise<User | null> {
    const userRepository = (await connectDB()).getRepository(User);
    return await userRepository.findOneBy({ email: email});
}


export async function registerUser(user: User): Promise<User | null> {
    const userRepository = (await connectDB()).getRepository(User);
    const newUser = new User();
    newUser.fullname = user.fullname;
    newUser.email = user.email;
    newUser.password = await argon2.hash(user.password);
    const userInsert = await userRepository.save(newUser);
    return await userRepository.findOneBy({id: userInsert.id})
}


