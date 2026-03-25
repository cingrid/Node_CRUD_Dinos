import mysql2 from 'mysql2'
import "dotenv/config";


//conecta ao banco de dados
// o mysql2 é bem sensível então a conexao PRECISA seguir o padrao de letra minuscula = process.env.DB_HOST. tem que ter DB tb.
const conexaoBanco = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
);



conexaoBanco.connect(function(err){
    if(err) throw err;
    console.log("Conexao estabelecida com sucesso");
});

export default conexaoBanco; //exporta module es6