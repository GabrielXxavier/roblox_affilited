/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.raw(`
    CREATE TABLE affiliated (
      id UUID NOT NULL
        CONSTRAINT pk_affiliated PRIMARY KEY
        DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    );

    CREATE TABLE clients (
      id UUID NOT NULL
        CONSTRAINT pk_client PRIMARY KEY
        DEFAULT gen_random_uuid(),

      affiliated_id UUID NOT NULL
        CONSTRAINT fk_affiliated_id REFERENCES affiliated(id),

      username TEXT NOT NULL,
      utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_store_payment_gateways_utc_created_on DEFAULT now()
    );

   
    CREATE TABLE orders (
      id UUID NOT NULL
        CONSTRAINT pk_order PRIMARY KEY 
        DEFAULT gen_random_uuid(),
      username TEXT NOT NULL,
      value NUMERIC(10,2) NOT NULL,
      utc_created_on TIMESTAMP NOT NULL
        CONSTRAINT df_store_payment_gateways_utc_created_on DEFAULT now()
    );
  `);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.raw(`
    DROP TABLE IF EXISTS clients_in_affiliated;
    DROP TABLE IF EXISTS clients;  
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS affiliated;
  `);
}
