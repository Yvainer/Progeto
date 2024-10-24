import {Request, Response}  from 'express'

export const nome = ((req:Request,res:Response) =>{
    let mostrarIdade: boolean = false
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
        telefone,
    })
})

export const idade = ((req:Request,res:Response)=>{
    res.render('pages/idade')
})

export const idadeResultado = ((req:Request,res:Response) =>{
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



