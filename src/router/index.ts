import { Router, Request, Response, RequestHandler } from "express";



const router = Router()

router.get('/', (req: Request, res: Response) => {
    let user = {
        nome: 'fulano',
        idade: 25

    }
    res.render('home',{
        user 
    })

})
router.get('/contato', (req: Request, res: Response) => {
    res.render('contato')
})
router.get('/sobre-nos', (req: Request, res: Response) => {
    res.render('sobre-nos')
})
//quando usamos middleware, colocamos NEXT
const interferir: RequestHandler = (req, res, next) => {
    let logged = false
    if (logged) {
        next()
    } else {
        res.status(404).send("Loggin nõa permitido")
    }


    //console.log("EXECUTANDO A PAG DE CONTATO")
    //next significa que liberamos o niddleware a pag. contatos
    next()
}
router.get('/contato', interferir, (req: Request, res: Response) => {
    console.log("passou pela pag. de contatos")
    res.send("contato")
})

router.get('/sobre', (req: Request, res: Response) => {
    res.send("sobre")
})

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let { origem, destino } = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

router.get('/noticias/', (req: Request, res: Response) => {
    let { origem, destino } = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

export default router



























//FAZEN A ROTA HOME, CONTATO E SOBRE