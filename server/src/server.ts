import  express from "express";
import  cors from 'cors';
import router from "./routes/routes";
import databaseConnect from "./config/database";



async function init (){
    console.log("inicializando");
    try {
        const app = express();

    const PORT = process.env.PORT || 5000;
    
    
    app.use(cors());
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    //Carrega a rota
    app.use("/", router);
    
    app.listen(PORT, () => {
        console.log(`O servidor está rodando na porta ${PORT}`);
    });

    await databaseConnect();
    
} catch (error) {
        console.log(error);
    }    
}

init();