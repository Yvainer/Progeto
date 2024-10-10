//importando o express
import express, {Request, Response} from 'express'
import path from 'path'
//Inportando o arquivo index.ts das rotas
import mainRoutes from './router/index'
//usando express 
const server = express()
//inportando template engine(para usar HTML)
import mustache from 'mustache-express'

//c0nfigurando o Mustache
server.set('view engine','mustache')

//configurando o camnho da pasta views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

//conficuração da pasta public
server.use(express.static(path.join(__dirname,'../public')))



//inserindo a rota no servidor
server.use(mainRoutes)

//Pagina nõa encvontrada
server.use((req:Request,res:Response) =>{
    res.status(404).send("Pagina não encontrada")
})

//gerar o servidor na porta 3000
server.listen(4000)

