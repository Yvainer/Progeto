import { Router, Request, Response, RequestHandler } from "express";
import { isBtcAddress } from "validator";



const router = Router()

router.get('/', (req: Request, res: Response) => {
    let idade: number = 15
    let mostrarIdade: boolean = false
    if (idade >= 18) {
        mostrarIdade = true
    }

    res.render('home', {
        nome: 'Fulano',
        sobreNome: 'de tal',
        aparecerMensagem: true,
        mostrarIdade,
        idade,
        produtos: [
            { titulo: 'Mesa', preco: 200 },
            { titulo: 'Xampu', preco: 15 },
            { titulo: 'Cadeira', preco: 50 },

        ],

        frases: [
            
        ]


    })



})
router.get('/contato', (req: Request, res: Response) => {
    res.render('contato')
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


router.get('/nome',(req:Request,res:Response) =>{
    /*iremos fazer uma requisição ao usuário (usando req)
    o "as string" é para ajudar o typescript a especificar
    o tipo desse dado que vou receber, e o query significa que
    é um dado que será enviado pela url */
    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let endereco: string = req.query.endereco as string
    let telefone: string = req.query.telefone as string

    res.render('pages/nome',{
        nome,
        idade,
        endereco,
        telefone
    })
})

/*

router.get('/formulario',(req:Request,res:Response) =>{

    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.telefone as string)
    let endereco: string = req.query.idade as string
    res.render('pages/formulario',{
        nome,
        idade,
        telefone,
        endereco
    })
})
*/

//GET exibe a página
router.get('/idade',(req:Request,res:Response)=>{
    res.render('pages/idade')
})


//POST processa as informações
router.post('/idade-resultado',(req:Request,res:Response) =>{
    let mostrarIdade: boolean = false
    let idade: number = 0
    if(req.body.anoNascimento) {
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        let anoAtual: number = new Date().getFullYear() //2024
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }
    res.render('pages/idade',{
        idade,
        mostrarIdade
    })
})



router.post('/dados',(req:Request,res:Response) =>{

    let email: string = req.query.nome as string
    let senha: number = parseInt(req.query.idade as string)
    

    res.render('pages/dados',{
        email,
        senha
    })

})

export default router



























//FAZEN A ROTA HOME, CONTATO E SOBRE