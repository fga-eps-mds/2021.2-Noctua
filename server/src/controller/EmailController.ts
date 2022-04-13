import { Request,Response } from "express";
import * as nodemailer from 'nodemailer';
import { getMaxListeners } from "process";
import 'dotenv/config';

import Email from "../models/Email";

export default class EmailController{

 enviaEmail(req:Request ,res: Response): any {
    
    const user = "Noctua.faq.unb@gmail.com"
    const pass = process.env.PASS

    var smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure:false,
        requireTLS: true,
        auth: { user, pass }
    });
    smtpTransport.sendMail({
        from: user,
        to: "Noctua.faq.unb@gmail.com",
        subject: req.body.assunto,
        html: `$ <h2> Email de contato: ${req.body.email_remetente}</h2> <br/> <br/> <h2>Mensagem</h2> <p>${req.body.mensagem}</p>`,
    
    }).then((info:any) => {
        const email =  Email.create(req.body);
    return res.status(201).json(info);
    }).catch(error => {
        res.status(400).json(error);
        console.log(process.env.USER_EMAIL)
    });
    
}

    


async getEmails(req:Request, res: Response){
    try{
    const email = await Email.find();
    return res.status(200).json(email);

}catch(error){
    return res.status(400).json(error.message);

    }

}


}