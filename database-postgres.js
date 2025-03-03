import { randomUUID } from "node:crypto"
import { title } from "node:process"
import sql from './db.js'
import { log } from "node:console"



export class DatabasePostgres {    
    async list(search){
        //Declaring variables
        let videos


        //If have been passed any parameter
        if(search){
            try {
                videos = await sql`SELECT * FROM videos where title ilike ${search}`
                console.log("Successful select")
                res.status("200").json(videos)
            } catch (err) {
                console.error("Unsuccessful select!")
                console.error(err)
            }
        
        
        } else { //If have'nt been passed any parameter
            videos = await sql`SELECT * FROM videos`
        }


        return videos;        
    }


    async create(video){
        //Creating a new UUID to the video
        const videoId = randomUUID();


        //Destructuring the attributes recieved like parameters
        const { title, description, duration } = video;


        //Creating a new registration
        try{
            const result = await sql`INSERT INTO videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration}) RETURNING *`
            console.log("Successful insert");
            console.log(result)
        } catch (err){
            console.error("Unsuccessful insert!")
            console.error(err)
        }
    }


    async update(videoId, video){
        //Desestruturing the atributes recieved by parameter
        const { title, description, duration } = video


        //Update the registration 
        try {
            const result = await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${videoId} RETURNING *`
            console.log("Successful update");
            console.log(result)
        } catch (err) {
            console.log("Unsuccessful update!");
            console.error(err);
        }
    }


    async delete(id){
        //Delete a database register
        try {
            const result = await sql`DELETE FROM videos WHERE id = ${id} RETURNING *`
            console.log("Successful delete")
            console.log(result)
        } catch (err) {
            console.log("Unsuccessful delete")
            console.error(err)
        }




    }
}