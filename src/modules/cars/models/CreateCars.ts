import {
    Entity,
    ObjectIdColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
class Cars {
    @ObjectIdColumn()
    id: string;

    @Column()
    marca: string;

    @Column()
    model: string;

    @Column()
    versao: string;

    @Column()
    ano: number;

    @Column()
    preco_de_venda: number;

    @Column()
    tipo_de_cambio: string;

    @Column()
    quilometragem: number;

    @CreateDateColumn()
    create_At: Date;

    @UpdateDateColumn()
    updated_At: Date;

    constructor() {
        this.create_At = new Date();
        this.updated_At = new Date();
    }
}

export { Cars };
