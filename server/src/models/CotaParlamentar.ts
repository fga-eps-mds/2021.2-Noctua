import {Schema, model} from 'mongoose'

const CotaParlamentarSchema = new Schema({
   
    cod_legislatura:{
        type:"String",
       
    },
    data_emissao:{
        type:"String",
       
    },
    id_documento:{
        type:"String",
       
    },id_cadastro:{
        type:"String",
       
    },
    id_tipo_documento:{
        type:"String",
       
    },
    num_carteira_parlamentar:{
        type:"String",
       
    },
    num_deputado_id:{
        type:"String",
       
    },
    num_legislatura:{
        type:"String",
       
    },
    num_ano:{
        type:"String",
       
    },
    num_especificacao_subcota:{
        type:"String",
       
    },
    num_lote:{
        type:"String",
       
    },
    num_mes:{
        type:"String",
       
    },
    num_parcela:{
        type:"String",
       
    },
    num_ressarcimento:{
        type:"String",
       
    },
    num_subcota:{
        type:"String",
       
    },
    sg_partido:{
        type:"String",
       
    },
    sg_uf:{
        type:"String",
       
    },
    tx_nome_parlamentar:{
        type:"String",
       
    },
    txt_cnpj_cpf:{
        type:"String",
       
    },
    txt_descricao:{
        type:"String",
       
    },
    txt_descricao_especificacao:{
        type:"String",
       
    },
    txt_fornecedor:{
        type:"String",
       
    },
    txt_numero:{
        type:"String",
       
    },
    txt_passageiro:{
        type:"String",
       
    },
    txt_trecho:{
        type:"String",
       
    },
    vlr_documento:{
        type:"String",
       
    },
    vlr_glosa:{
        type:"String",
       
    },
    vlr_liquido:{
        type:"String",
       
    },
    vlr_restituicao:{
        type:"String",
       
    },



});
export default model("CotaParlamentar",CotaParlamentarSchema);