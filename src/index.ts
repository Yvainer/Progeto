import validator from 'validator'
import {soma, subtrair} from './Matematica'
import {filme} from './filme'

let  nome: string = "Lucas"
let idade: number = 32

console.log(`Meu nome é ${nome}`) 
//val idando IP
let ip = '192.168.0.7'
console.log(validator.isIP(ip)) 
//validando e-mail

console.log(`Os filmes são ${filme}`)

console.log(validator.isEmail('fulano@gmail.com'))

console.log(`SOMA: ${soma(10,20)}`)
console.log(`SUBTRAÇÃO ${subtrair(5,20)}`)

