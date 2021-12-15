async function connect(){
    if (global.connection && global.connection.state != "disconnected"){
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://sql10458207:P7Dg857nYw@sql10.freesqldatabase.com/sql10458207");
    console.log("Conectado ao BD com sucesso");

    global.connection = connection;

    return connection;
}

async function getProdutos(){

    const conn = await connect(); 
    console.log("GETPRODUTOS - Conectado ao banco - vou recuperar meus produtos");

    const [resultado] = await conn.query("SELECT * from tb_produtos");

    return resultado;
}

async function getProdutoPorId(id){
    const conn = await connect();
    console.log("GETPRODUTOPORID - Conectado ao banco");
    const parameters = [id];
    const [resultado] = await conn.query("SELECT * from tb_produtos WHERE codigo = ?", parameters);
    return resultado;
}

async function getCategorias(Categorias){
    const conn = await connect();
    console.log("GETCATEGORIAS - Conectado ao banco de dados");
    const parameters = [Categorias];
    const [resultado] = await conn.query("SELECT DISTINCT id_categoria, categoria  FROM tb_produtos", parameters);
    return resultado;
}

async function getProdutosPorCategoria(idCategoria){
    const conn = await connect();
    console.log("GETPRODUTOSPORCATEGORIA - Conectado ao banco de dados");
    const parameters = [idCategoria];
    const [resultado] = await conn.query("SELECT * FROM tb_produtos where id_categoria = ?", parameters);
    return resultado;
}
module.exports = {getProdutos, getProdutoPorId, getCategorias, getProdutosPorCategoria};

// klapaucius;!;!;!;!;!