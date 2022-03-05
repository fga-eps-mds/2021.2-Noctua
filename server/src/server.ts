import * as express from "express";
import * as cors from 'cors';
import router from "./routes/routes";
import databaseConnect from "./config/database";

const app = express();

const PORT = process.env.APP_PORT || 5000;

databaseConnect();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Carrega a rota
app.use("/", router);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});