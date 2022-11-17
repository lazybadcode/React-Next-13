import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
    permission!: string
}
