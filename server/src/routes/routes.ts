import { Request, Response, Router } from 'express';
import EmailController from '../controller/EmailController';

const router = Router();
const emailController = new EmailController();

router.post("/enviaEmail",(req:Request, res:Response) =>{
emailController.enviaEmail(req,res);
})

router.get("/emails",(req:Request, res:Response) =>{
    emailController.getEmails(req,res);
    })


export default router;