import express from "express";
import{sum,dif} from "./controllers/operacao"
import dotenv from "dotenv";
import { dayOfMonth, month, year } from "./controllers/date";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.listen(PORT, function(){console.log(`Rodando ${PORT}`)});

app.get("/somar/:x/:y", sum);

app.post("/subtrair", dif);
app.get("/dia", dayOfMonth);
app.get("/mes", month);
app.get("/ano", year);

app.use(function(req,res){
    res.send("Rota desconhecida");
})