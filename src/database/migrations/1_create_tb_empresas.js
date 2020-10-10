export async function up(knex, Promise){
    return knex.schema.createTable('tb_empresas', table =>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.integer('cnpj',14).notNullable();
        table.string('whatsapp').notNullable();
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();
        table.string('estado',2).notNullable();
        table.string('endereco').notNullable();
        table.enum('tipos_de_servico_prestado',[]).notNullable();
        table.decimal('comissao').notNullable();
        table.integer('avaliacao').notNullable();
        table.enum('entregadores',[]).references('nome').inTable('tb_pessoas')
    })
}

export async function down(knex, Promise){
    return knex.schema.dropTable('tb_empresas');
}
