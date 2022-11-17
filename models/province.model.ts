import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: "provinces",
    // synchronize: false
})
export class Province {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

}
