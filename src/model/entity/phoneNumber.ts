import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import PersonalData from "./personalData"
@Entity()
export default class PhoneNumber{
    @PrimaryGeneratedColumn()
    phone_id: number;

    @Column({type: "varchar", length: 14, nullable: false})
    phone_number: string;

    @ManyToOne(type => PersonalData)
    @JoinColumn()
    personalDataFk: PersonalData
}