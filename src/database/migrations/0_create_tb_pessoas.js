export async function up(knex, Promise){
    return knex.schema.createTable('tb_pessoas', table =>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.integer('cpf',11).notNullable();
        table.string('whatsapp').notNullable();
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();
        table.string('estado',2).notNullable();
        table.string('endereco').notNullable();
        table.decimal('saldo',2).notNullable();
        table.decimal('saldo_virtual',2).notNullable();
        table.integer('tipo_de_pessoa').notNullable();
        table.decimal('comissao',2).notNullable();
    })
}

export async function down(knex, Promise){
    return knex.schema.dropTable('tb_pessoas');
}
