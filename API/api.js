const express = require("express");
const cors = require("cors");
const bd      = require("./dbconnection");
const PORT    = process.env.PORT || 3000;

const api = express();  
api.use(cors());

api.get("/produtos",  async (req, res) => {
    try{
        const result = await bd.getProdutos();

        res.status(200);  
        res.json(result);
    }
    catch(erro){
        console.log("Erro - no endpoint GET /produtos");
        console.log(erro);
    }
})

api.get("/produtos/:codigo", async (req, res) => {
    try{
        const idProduto = req.params["codigo"];
        console.log("ID recuperado = "+req.params["codigo"]);
        const resultado = await bd.getProdutoPorId(idProduto);
        if (resultado.length == 0){
            res.status(404); 
            res.send("NOT FOUND");
        }
        else{
            const produto = resultado[0];
            res.status(200);
            res.json(produto);
        }
    }
    catch(erro){
        console.log("Erro no endpoint /GET/id");
        console.log(erro);
    }
})

api.get("/categorias", async (req, res) => {
    try{
        const categorias = await bd.getCategorias();
        res.status(200);
        res.json(categorias);
    }
    catch (erro){
        console.log("Erro no endpoint GET /categorias");
        console.log(erro);
    }
})

api.get("/categorias/:id", async (req, res) => {
    try{
        const idCategoria = req.params["id"];
        const prodporcateg = await bd.getProdutosPorCategoria(idCategoria);
        res.status(200);
        res.json(prodporcateg);
    }
    catch (erro){
        console.log("Erro no endpoint GET /categorias/id");
        console.log(erro);
    }
})


api.listen(process.env.PORT || PORT, () => {
    console.log(`API esta no ar na PORTA ${PORT}`);
});

// klapaucius;!;!;!;!;!