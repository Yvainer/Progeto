import {Request, Response}  from 'express'

//COLOCAR A ROTA CONTATO E SOBRE AQUI

export const contato = ((req:Request,res:Response)=>{
    res.render('pages/contato')
})

export const sobre = ((req:Request,res:Response)=>{
    res.render('pages/sobre')
})