import { randomUUID } from "node:crypto"
import { title } from "node:process"
import sql from './db.js'
import { log } from "node:console"



export class DatabasePostgres {    

    //listando os elementos no banco de dados
    async list(search){
        //declarando
        let videos
        if(search){
            videos = await sql`SELECT * FROM videos where title ilike"%${search}%"`
        } else {
            videos = await sql`SELECT * FROM videos`
        }
        return videos;        
    }


    //criando um novo elemento no database-memory
    async create(video){
        //criando um UUID para o video novo.
        const videoId = randomUUID;

        //desestruturando os atributos recebidos por parâmetro
        const { title, description, duration } = video;

        try{
            videos = await sql`INSERT INTO videos (id, title, description, duration) VALUES ("%${videoId}%", "%${title}%", "%${description}%", "%${duration}%")`
            console.log("Insert bem sucedido!");
        } catch (err){
            console.error("Falha no insert de dados!")
        }
    }


    //atualizando um elemento do database-memory
    update(id, video){



    }


    //apagando um elemento do database-memory
    delete(id){



    }
}