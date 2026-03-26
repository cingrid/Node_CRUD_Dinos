// conexao com o db
import conexaoBanco from "../sql/conexaoBanco";

class ModelagemUsuario {

    //seleciona todos
    selecionarTodosUsuarios() {
        const sql = `SELECT * FROM USUARIO;`
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


    //cria um user
    criarUsuario(nome) {
        const sql = `INSERT INTO USUARIO (nome) VALUES (?);`
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


    // edita um user
    editarUsuario(nome) {
        const sql = `UPTADE USUARIO SET NOME = ?`
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

    // seleciona um user
    selecionarUsuarioId(id) {
        const sql = `SELECT * FROM USUARIO WHERE usuario_id =?`
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


    //deleta user
    deletarUsuario() {
        const sql = `DELETE FROM USUARIO WHERE usuario_id = ?`

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




}