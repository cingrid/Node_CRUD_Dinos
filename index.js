import express from 'express'
import 'dotenv/config'
import Tabelas from './sql/tabelas.js'
import conexaoBanco from './sql/conexaoBanco.js'

// conecta ao express + seta json como forma 
const app = express();
app.use(express.json());

////criando as tabelas
// primeiro passo: instanciar tabelas pq eu fiz das tabelas uma classe
const tabelas = new Tabelas();
//depois de instanciar, utilizar o método init 
tabelas.iniciarConexao(conexaoBanco);


app.listen(8080, (err) => {
    if (err) {
        console.log('erro ao conectar no servidor' + err);
    }
    console.log('rodando na porta 8080' );
})

