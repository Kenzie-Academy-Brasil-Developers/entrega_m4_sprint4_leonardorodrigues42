import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude, Expose } from "class-transformer";

@Entity("user")
class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({
        length: 50
    })
    name: string

    @Column({
        length: 50,
        unique: true
    })
    email: string

    @Column()
    isAdm: boolean

    @Column({
        default: true
    })
    isActive: boolean

    @Column()
    @Exclude()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn("")
    updatedAt: Date
}

export default User