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
        type:"String",
       
    },
    direitos_pessoais:{
        type:"String",
       
    },
    indenizacoes:{
        type:"String",
       
    },
    direitos_eventuais:{
        type:"String",
       
    },
    total_de_rendimentos:{
        type:"String",
       
    },
    previdencia_publica:{
        type:"String",
       
    },
    imposto_de_renda:{
        type:"String",
       
    },
    descontos_diversos:{
        type:"String",
       
    },
    retencao_por_teto_constitucional:{
        type:"String",
       
    },
    total_de_descontos:{
        type:"String",
       
    },
    rendimento_liquido:{
        type:"String",
       
    },
    remuneracao_do_orgao_de_origem:{
        type:"String",
       
    },
    diarias:{
        type:"String",
       
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