import { query, Request, Response } from "express";
import fs from 'mz/fs.js'
import * as csv from '@fast-csv/parse'
import path from 'path'
import CotaParlamentar from "../models/CotaParlamentar";

export default class CotaParlamentarController{

async downloadCsv(req:Request, res:Response):Promise<Response>{
    const csvpath = path.resolve('src/datasets', "./cota-parlamentar.csv");
    const log = (data:any) => console.log(JSON.stringify(data, undefined, 2));       
    try {
    
    
        let headers = Object.keys(CotaParlamentar.schema.paths)
          .filter(k => ['_id','__v'].indexOf(k) === -1);
    
        console.log(headers);
    
        await new Promise((resolve,reject) => {
    
          let buffer:any = [],
              counter = 0;
    
          let stream = fs.createReadStream(csvpath)
            .pipe(csv.parse({ headers }))
            .on("error", reject)
            .on("data", async (doc:any) => {
              stream.pause();

              if(doc.num_ano!= 2019){stream.resume();} else{
              buffer.push(doc);
              counter++;
              log(doc);
              try {
                if ( counter > 10000 ) {
                  await CotaParlamentar.insertMany(buffer);
                  buffer = [];
                  counter = 0;
                }
              } catch(e) {
                stream.destroy(e);
              }
    
              stream.resume();
            }
            
    
            })
            .on("end", async () => {
              try {
                if ( counter > 0 ) {
                  await CotaParlamentar.insertMany(buffer);
                  buffer = [];
                  counter = 0;
                  resolve(true);
                  return res.status(200).json("Fim do Stream");
                }
              } catch(e) {
                stream.destroy(e);
              }
            });
    
        });
       
    
      } catch(e) {
        res.status(400).json(e.message);
        console.error(e)
      } finally {
        process.exit()
      }
}

async getDataPageable(req: Request, res: Response): Promise<Response> {
    
    try {
        const page = parseInt(String(req.query.page), 10) || 1;
        const limit = parseInt(String(req.query.limit), 10) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const nextPage= page+1;
        const result = await CotaParlamentar.find(req.query).skip(startIndex).limit(limit);

        if(result.length != 0){return res.status(200).json({
          page,
          nextPage,
          startIndex,
          endIndex,
          result});
        }else{
          return res.status(400).json("Não foi possível encontrar dados com as informações passadas");
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
}



async deleteAll(req: Request, res: Response): Promise<Response> {
    try {      

        const result = await CotaParlamentar.remove();
        return res.status(200).json("Banco deletado com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


}
