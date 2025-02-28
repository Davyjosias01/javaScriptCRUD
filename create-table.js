import connection from './db.js'

async function createTable() {
   
    const client = await connection()
   
    try {
    client.query(`
      CREATE TABLE videos (
        title TEXT,
        description TEXT,
        duration INTEGER 
      )
    `);
    console.log('Tabela criada com sucesso!');
  
   } catch (error) {
    console.error('Erro ao criar tabela:', error);
  
   } finally {
    client.release()
   }

}

createTable();