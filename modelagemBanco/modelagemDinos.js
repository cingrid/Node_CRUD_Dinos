// modelagem das tabela dinos


// primeiro importa a conexao com o banco
import conexaoBanco from "../sql/conexaoBanco";

//criar uma classe para modelage

class ModelagemDinos {

    // função das modelagems

    // função selecionar todos os dinossauros
    selecionarTodosDinos() {
        const sql = "SELECT * FROM dinossauros;"; // primeiro eu boto qual é o sql que eu to definindo

        // depois a minha função vai retornar uma promise
        return new Promise((resolve, reject) => {
            conexaoBanco.query(sql, (error, response) => {
                if (error) {
                    console.log("Erro ao tentar selecionar todos os dinos no banco de dados", + error);
                    reject(error)
                    return;
                }
                console.log("Encontramos os seguintes dinos no banco: " + response);
            });
        });
    }

    //criando um dinossauro no banco de dados
    // tem que por os parâmetros pra saber o que a função tem que receber
    criarUmDino(nome, alimentacao, especie, imagem_url, localizacao, descricao, periodo, peso_toneladas, tamanho_metros, id) {

        const sql = `INSERT INTO dinossauros (nome, alimentacao, especie, imagem_url, localizacao, descricao, periodo, peso_toneladas, tamanho_metros, id) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`

        return new Promise((resolve, reject) => {
            conexaoBanco.query(sql, [nome, alimentacao, especie, imagem_url, localizacao, descricao, periodo, peso_toneladas, tamanho_metros, id], (error, response) => {
                if (error) {
                    console.log("Erro ao tentar criar um novo dino no banco de dados" + error);
                    reject(error)
                    return;
                }
                console.log("Sucesso ao criar um novo dino no db" + response)''
            });
        });
    }


    atualizaUmDino(nome, alimentacao, especie, imagem_url, localizacao, descricao, periodo, peso_toneladas, tamanho_metros, id) {
        const sql = `UPDATE dinossauro SET nome = ?, alimentacao = ?, especie = ?, imagem_url = ?, localizacao = ?, descricao = ?, periodo = ?, peso_toneladas = ?, tamanho_metros = ?, dino_id = ?`

        return new Promise((resolve, reject) => {
            conexaoBanco.sql = sql, [nome, alimentacao, especie, imagem_url, localizacao, descricao, periodo, peso_toneladas, tamanho_metros, id], (error, response) => {
                if (error) {
                    console.log("Erro ao atualizar o dino no db" + response)
                    reject(error)
                    return;
                }
                console.log("Sucesso ao atualizar um dino no db" + response);
            }
        })
    }

    // agora é tudo pelo id: deletar pelo id + buscar pelo id 
    buscaDinoPeloId(id) {
        const sql = `
        SELECT * FROM dinossauros WHERE dino_id = ?
        `

        return new Promise((resolve, reject) => {
            conexaoBanco.sql(sql, [id], (error, response) => {
                if (error) {
                    console.log("Erro ao buscar o dino pelo identificador" + error);
                    reject(error)
                    return;
                }
                console.log("Sucesso ao buscar o dino pelo id" + response);
            });
        });
    }


    //deleta o dino
    deletarDino(id) {
        const sql = `DELETE FROM dinossauros WHERE dino_id = ? `
        return new Promise((resolve, reject) => {
            conexaoBanco.sql(sql, [id], (error, response) => {
                if (error) {
                    console.log("Erro ao deletar o dino pelo identificador" + error);
                    reject(error)
                    return;
                }
                console.log("Sucesso ao deletar o dino pelo id" + response);
            });
        });

    }
}


export default ModelagemDinos;