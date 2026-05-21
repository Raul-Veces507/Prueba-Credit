/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {

    await knex.schema.createTable(
        'credit_requests',
        (table)=>{

            table.increments('id').primary();

            table
            .string('applicantId')
            .notNullable();

            table
            .decimal(
                'amount',
                10,
                2
            )
            .notNullable();

            table
            .integer('termMonths')
            .notNullable();

            table
            .enu(
                'status',
                [
                    'PENDING',
                    'APPROVED',
                    'REJECTED'
                ]
            )
            .defaultTo('PENDING');

            table.timestamps(
                true,
                true
            );

        }
    );


    await knex.schema.createTable(
        'request_history',
        (table)=>{

            table
            .increments('id')
            .primary();

            table
            .integer('requestId')
            .unsigned()
            .notNullable();

            table
            .string(
                'previousStatus'
            );

            table
            .string(
                'newStatus'
            )
            .notNullable();

            table
            .text(
                'comment'
            )
            .notNullable();

            table.timestamps(
                true,
                true
            );

            table
            .foreign(
                'requestId'
            )
            .references(
                'credit_requests.id'
            )
            .onDelete(
                'CASCADE'
            );

        }
    );

};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {

    await knex.schema.dropTableIfExists(
        'request_history'
    );

    await knex.schema.dropTableIfExists(
        'credit_requests'
    );

};