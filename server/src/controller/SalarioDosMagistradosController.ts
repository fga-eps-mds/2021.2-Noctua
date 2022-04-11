import { query, Request, Response } from "express";
import fs from 'mz/fs.js'
import * as csv from '@fast-csv/parse'
import path from 'path'
import { SalarioDosMagistrados } from "../model/SalarioDosMagistrados";


export default class SalarioDosMagistradosController {

  async index(req: Request, res: Response): Promise<Response> {
    const csvpath = path.resolve('src/datasets', "/salario_dos_magistrados.csv");
    const log = (data: any) => console.log(JSON.stringify(data, undefined, 2));
    try {
      let headers = Object.keys(SalarioDosMagistrados.schema.paths)
        .filter(k => ['_id', '__v'].indexOf(k) === -1);

      console.log(headers);

      await new Promise((resolve, reject) => {

        let buffer: any = [],
          counter = 0;
        let stream = fs.createReadStream(csvpath)
          .pipe(csv.parse({ headers }))
          .on("error", reject)
          .on("data", async (doc: any) => {
            stream.pause();

            if (doc.num_ano != 2020) { stream.resume(); } else {
              buffer.push(doc);
              counter++;
              log(doc);
              try {
                if (counter > 10000) {
                  await SalarioDosMagistrados.insertMany(buffer);
                  buffer = [];
                  counter = 0;
                }
              } catch (e) {
                stream.destroy(e);
              }

              stream.resume();
            }
          })
          .on("end", async () => {
            try {
              if (counter > 0) {
                await SalarioDosMagistrados.insertMany(buffer);
                buffer = [];
                counter = 0;
                resolve(true);
                return res.status(200).json("Final do Stream");
              }
            } catch (e) {
              stream.destroy(e);
            }
          });

      });
    } catch (e) {
      res.status(400).json(e.message);
      console.error(e)
    } finally {
      process.exit()
    }
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
    
    }
}


}
