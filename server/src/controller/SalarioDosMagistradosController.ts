import { query, Request, Response } from "express";
import fs from 'mz/fs.js'
import * as csv from '@fast-csv/parse'
import path from 'path'
import { SalarioDosMagistrados } from "../model/SalarioDosMagistrados";


export default class SalarioDosMagistradosController {

async index(req: Request, res: Response):Promise<Response> {
    const csvpath = path.resolve('src/datasets', "/salario_dos_magistrados.csv");
    const log = (data:any) => console.log(JSON.stringify(data, undefined, 2));
    try{
        let headers = Object.keys(SalarioDosMagistrados.schema.paths)
          .filter(k => ['_id','__v'].indexOf(k) === -1);
    
        console.log(headers);
    
        await new Promise((resolve,reject) => {
    
          let buffer:any = [],
              counter = 0;
    
    }