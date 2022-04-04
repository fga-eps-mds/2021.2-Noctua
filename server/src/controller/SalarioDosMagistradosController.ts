import { query, Request, Response } from "express";
import fs from 'mz/fs.js'
import * as csv from '@fast-csv/parse'
import path from 'path'


export default class SalarioDosMagistradosController {

async index(req: Request, res: Response):Promise<Response> {
    const csvpath = path.resolve('src/datasets', "/salario_dos_magistrados.csv");
    const log = (data:any) => console.log(JSON.stringify(data, undefined, 2));