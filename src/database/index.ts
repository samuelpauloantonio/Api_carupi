import { createConnection } from 'typeorm';

export async function connection(): Promise<void> {
    await createConnection({
        type: 'mongodb',
        host: process.env.DB_HOSTNAME,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,

        database: process.env.DATABASE,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        entities: ['./src/modules/cars/models/*.ts'],
        migrations: ['./src/database/migrations/*.ts'],
        cli: {
            migrationsDir: './src/database/migrations',
        },
    });
}
