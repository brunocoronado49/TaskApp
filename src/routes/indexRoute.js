import { Router } from 'express'
import indexController from '../controllers/indexController'


const router = Router()

router.get("/", indexController.renderIndex);

router.post("/task/add", indexController.saveTask);

router.get("/about", indexController.renderAbout);

router.get("/edit/:id", indexController.renderEdit);

router.post('/update/:id', indexController.updateTask)

export default router