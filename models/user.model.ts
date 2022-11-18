import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Blog } from "./blog.model"

@Entity({
    name: "users",
    // synchronize: false
})
export class User {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    fullname!: string

    @Column({type: "varchar", length:200, unique: true})
    email!: string

    @Column({select : false})
    password!: string

    @Column({default:"member"})
    permission?: string

    @OneToMany(()=> Blog, (blog) => blog.user)
    blog? : Blog[]; 
}
