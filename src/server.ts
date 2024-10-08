//importando o express
import express, {Request, Response} from 'express'

//Inportando o arquivo index.ts das rotas
import mainRoutes from './router/index'

//usando express
const server = express()

//inserindo a rota no servidor
server.use(mainRoutes)

//Pagina nõa encvontrada
server.use((req:Request,res:Response) =>{
    res.status(404).send("Pagina não encontrada")
})

//gerar o servidor na porta 3000
server.listen(3000)

