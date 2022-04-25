import {Schema, model} from 'mongoose'

const SalarioMagistradosSchema = new Schema({
    cpf:{
        type:"String",
       
    },
    nome:{
        type:"String",
       
    },
    cargo:{
        type:"String",
       
    },
    lotacao:{
        type:"String",
       
    },
    subsidio:{
        type:"Number",
       
    },
    direitos_pessoais:{
        type:"Number",
       
    },
    indenizacoes:{
        type:"Number",
       
    },
    direitos_eventuais:{
        type:"Number",
       
    },
    total_de_rendimentos:{
        type:"Number",
       
    },
    previdencia_publica:{
        type:"Number",
       
    },
    imposto_de_renda:{
        type:"Number",
       
    },
    descontos_diversos:{
        type:"Number",
       
    },
    retencao_por_teto_constitucional:{
        type:"Number",
       
    },
    total_de_descontos:{
        type:"Number",
       
    },
    rendimento_liquido:{
        type:"Number",
       
    },
    remuneracao_do_orgao_de_origem:{
        type:"Number",
       
    },
    diarias:{
        type:"Number",
       
    },
    url:{
        type:"String",
       
    },
    tribunal:{
        type:"String",
       
    },
    orgao:{
        type:"String",
       
    },
    data_de_publicacao:{
        type:"String",
       
    },
    mesano_de_referencia:{
        type:"String",
       
    },

});
export default model("SalarioMagistrados",SalarioMagistradosSchema);