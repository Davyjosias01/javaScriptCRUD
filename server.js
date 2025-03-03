/*import { createServer } from 'node:http'
const server = createServer((request, response) => {
    response.write('oi, Cleber')
    return response.end()
})
server.listen(3333)*/

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'


const server = fastify()
const database = new DatabasePostgres()


//Endpoint para criação de videos:
//POST http://localhost:3333/videos
server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration,
    })

    //console.log(database.list())
    return reply.status(201).send()
})


//Endpoint para listagem dos videos:
//GET
server.get('/videos', (request, reply)=>{
//    const search = request.query.search

    console.log(search)
    
    const videos = database.list(search)
    
    console.log(videos)

    return videos
})


//Atualização de um video
//PUT
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body


    database.update(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})


//Destruição de um video
//DELETE
server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    database.delete(videoId)
    return reply.status(204).send()
})

server.listen ({
    port:    3333
})





