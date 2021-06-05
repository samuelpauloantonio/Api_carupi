import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
class Cars {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nome: string;

    @Column()
    marca: string;
}

export { Cars };
