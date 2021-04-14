import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;

    @Column()
    years_old: number;

    @Column()
    birthday: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) this.id = uuidV4();
    }
}

export { User };
