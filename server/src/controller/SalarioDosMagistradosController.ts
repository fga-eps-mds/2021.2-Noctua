import { query, Request, Response } from "express";
import fs from 'mz/fs.js'
import * as csv from '@fast-csv/parse'
import path from 'path'


export default class SalarioDosMagistradosController {

async index(req: Request, res: Response):Promise<Response> {