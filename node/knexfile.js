import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.resolve('./', '.env') });
console.log('ENV HOST:', process.env.PSQL_HOST);
console.log('ENV DB:', process.env.PSQL_DATABASE);
console.log('ENV USER:', process.env.PSQL_USER);
console.log('ENV PASS:', process.env.PSQL_PASSWORD);
const config = {
    client: 'pg',
    connection: {
        host: process.env.PSQL_HOST,
        database: process.env.PSQL_DATABASE,
        user: process.env.PSQL_USER,
        password: process.env.PSQL_PASSWORD
    },
};

export default config;
