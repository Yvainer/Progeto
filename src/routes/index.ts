import {Router,Request,Response} from 'express'
import * as HomeController from '../controllers/homeController'
import * as infoController from '../controllers/infoController'
import * as userController from '../controllers/userController'


const router = Router()

//ROTA HOME
router.get('/',HomeController.home)
router.get('/contato',infoController.contato)
router.get('/sobre',infoController.sobre)
router.get('/nome',userController.nome)
router.get('/idade',userController.idade)
router.post('/idade-resultado',userController.idadeResultado)
  

                                    

export default router
