import { randomUUID } from "node:crypto"
import { title } from "node:process"
import connection from './db.js'



export class DatabasePostgres {    

    //listando os elementos no banco de dados
    list(search){
        const client = await connection()
        let videos
        if (search){
            client.query(`SELECT * FROM videos WHERE title ilike "%${}%"`)
            

        }
    



    }


    //criando um novo elemento no database-memory
    create(video){

        async function createVideo((params) => {
            try {
                const client = await pool.connect()
                await client.query(
                    INSERT
                )
            } catch (error) {
                
            }

        })

    }


    //atualizando um elemento do database-memory
    update(id, video){

    }


    //apagando um elemento do database-memory
    delete(id){

    }



}