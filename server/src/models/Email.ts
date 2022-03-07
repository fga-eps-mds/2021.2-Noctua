import {Schema, model} from 'mongoose'


const EmailSchema = new Schema({
    assunto:{
        type:"String",
        required:true,
    },
    email_remetente:{
        type:"String",
        required:true,
    },
    mensagem:{
        type:"String",
        required:true,
    },

});

export default model("Email", EmailSchema);;