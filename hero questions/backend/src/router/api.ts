import { Router } from "express";
import * as apiController from "../controller/apiController";

const router = Router()

router.get('/ping', apiController.ping)
router.post('/register', apiController.register)
router.post('/login', apiController.login)
router.post('/tokenValidation', apiController.tokenValidation)
router.put('/heroQuestions', apiController.heroQuestions)
router.post('/allHeroAnswer', apiController.getAllHeroAnswer)

export default router