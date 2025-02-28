import { randomUUID } from "node:crypto"
import { title } from "node:process"

export class DatabaseMemory {
    #videos = new Map()


    //listando os elementos da database-memory
    list(search){
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]

                return{
                    id, 
                    ...data
                }
        })
        .filter(video => {
            if (search){
                return video.title.includes(search)
            }

            return true
        })
    }


    //criando um novo elemento no database-memory
    create(video){
        const videoId = randomUUID()
        
        this.#videos.set(videoId, video)
    }


    //atualizando um elemento do database-memory
    update(id, video){
        this.#videos.set(id, video)
    }


    //apagando um elemento do database-memory
    delete(id){
        this.#videos.delete(id)
    }



}