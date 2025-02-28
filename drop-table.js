import connection from './db.js'

async function dropTable() {
  
  const client = await connection()
  
  try {
    client.query(` DROP TABLE videos `);
    console.log('Tabela deletada com sucesso!');

  } catch (error) {
    console.error('Erro ao criar tabela:', error);

  } finally {
    client.release()
  }
}

dropTable();

