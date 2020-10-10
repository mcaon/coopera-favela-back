export async function up(knex, Promise){
    return knex.schema.createTable('tb_pedidos', table =>{
        table.increments('id').primary();
        table.integer('tipo_de_servico_pedido').notNullable();
        table.string('descricao').notNullable();
        table.string('whatsapp_solicitante').notNullable().references('whatsapp').inTable('tb_pessoas');
        table.string('whatsapp_fornecedor').references('whatsapp').inTable('tb_empresas')
        table.string('solicitante').notNullable().references('nome').inTable('tb_pessoas');
        table.string('bairro').notNullable().references('bairro').inTable('tb_pessoas');
        table.string('cidade').notNullable().references('cidade').inTable('tb_pessoas');
        table.string('estado',2).notNullable().references('estado').inTable('tb_pessoas');
        table.string('endereco').notNullable().references('endereco').inTable('tb_pessoas');
        table.string('fornecedor').references('nome').inTable('tb_empresas');
        table.string('entregador');

    })
}

export async function down(knex, Promise){
    return knex.schema.dropTable('tb_pedidos');
}
