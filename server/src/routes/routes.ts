import { Request, Response, Router } from 'express';
import CotaParlamentarController from '../controller/CotaParlamentarController';
import EmailController from '../controller/EmailController';
import SalarioDosMagistradosController from '../controller/SalarioDosMagistradosController';

const router = Router();

//Rotas para envio de email
const emailController = new EmailController();

router.post("/enviaEmail",(req:Request, res:Response) =>{
emailController.enviaEmail(req,res);
})

router.get("/emails",(req:Request, res:Response) =>{
    emailController.getEmails(req,res);
    })
//Rotas para Cota Parlamentar
const cotaParlamentarController = new CotaParlamentarController();

router.post("/insereCotaParlamentar",(req: Request, res: Response) => {
    cotaParlamentarController.downloadCsv(req,res);
});
router.get("/getCotasParlamentarPaginado",(req: Request, res: Response) => {
   cotaParlamentarController.getDataPageable(req,res);
});
router.delete("/deleteCotaParlamentar",(req: Request, res: Response) => {
   cotaParlamentarController.deleteAll(req,res);
});

//Rotas para Salario dos magistrados
const salarioDosMagistrados = new SalarioDosMagistradosController();

router.post("/insereSalarioMagistrados",(req: Request, res: Response) => {
    salarioDosMagistrados.index(req,res);
});
router.get("/getSalarioMagistrados",(req: Request, res: Response) => {
    salarioDosMagistrados.getDataPageable(req,res);
});
router.delete("/deleteSalarioMagistrados",(req: Request, res: Response) => {
    salarioDosMagistrados.deleteAll(req,res);
});
export default router;