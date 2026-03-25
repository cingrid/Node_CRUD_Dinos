
class Tabelas {
    
    
    // primeiro o iniciar a conexao 
    iniciarConexao(conexaoBanco) {
        this.conexaoBanco = conexaoBanco;
        this.criaTabelaDinossauros();
        this.criaTabelaUsuarios();
    }

    // depois cria as tabelas primeiro de usuario pq tem uma PK que vai ser usada na relacao 1:N na tabela de dinossauros

        criaTabelaUsuarios() {
        const sql =
            `
        create table if not exists usuario (
	    usuario_id int auto_increment not null,
        nome varchar(200),
        constraint pk_usuario primary key (usuario_id)
);
        `

        // teste conexao
        this.conexaoBanco.query(sql, (error) => {
            if (error) {
                console.log("Houve um erro ao criar o usuário" + error);
                return;
            }
            console.log("Tabela de usuários criada com sucesso")
        })

    }

    //segundo cria funções que façam o sql
    criaTabelaDinossauros() {
        const sql =

            `
        create table if not exists dinossauros (
	    dino_id int auto_increment not null,
        nome varchar(200) not null,
        alimentacao varchar(200) not null,
        especie varchar(200) not null,
        imagem_url varchar(500) not null,
        localizacao varchar(200),
        descricao text not null,
        periodo varchar(200) not null,
        peso_toneladas decimal not null,
        tamanho_metros int not null,
	    usuario_id int,
        constraint pk_dinossauros primary key(dino_id),
        foreign key (usuario_id) references usuario(usuario_id)
);
        `

        this.conexaoBanco.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar os dinos " + error);
                return;
            }
            console.log("Sucesso ao criar a tabela de dinos");
        })
    }




}



export default Tabelas;