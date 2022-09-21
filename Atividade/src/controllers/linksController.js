const LinksService = require('../services/linksService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};
        let links = await LinksService.buscarTodos();

        for(let i in links){
            json.result.push({
                codigo: links[i].codigo,
                nomeDoSite: links[i].nomeDoSite,
                primeiroNomeAutor: links[i].primeiroNomeAutor,
                segundoNomeAutor: links[i].segundoNomeAutor,
                dataPublicacao: links[i].dataPublicacao,
                linkDoSite: links[i].linkDoSite
            });
        }
        res.json(json);
    },
    buscarUm: async (req, res)=>{
        let json = {error:'', result:{}};
        let codigo = req.params.codigo;
        let link = await LinksService.buscarUm(codigo);

        if(link){
            json.result = link;
        }
        res.json(json);
    },
    inserir: async (req, res)=>{
        let json = {error:'', result:{}};
        
        let nomeDoSite = req.body.nomeDoSite;
        let primeiroNomeAutor = req.body.primeiroNomeAutor;
        let segundoNomeAutor = req.body.segundoNomeAutor;
        let dataPublicacao = req.body.dataPublicacao;
        let linkDoSite = req.body.linkDoSite;

        if(nomeDoSite && primeiroNomeAutor && segundoNomeAutor && dataPublicacao && linkDoSite){
            let linkCodigo = await LinksService.inserir(nomeDoSite, primeiroNomeAutor, segundoNomeAutor, dataPublicacao, linkDoSite);
            json.result = {
                codigo: linkCodigo,
                nomeDoSite, 
                primeiroNomeAutor, 
                segundoNomeAutor, 
                dataPublicacao, 
                linkDoSite
            };
        }else{
            json.error = 'Campos não enviados!';
        }
        res.json(json);
    },
    alterar: async (req, res)=>{
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let nomeDoSite = req.body.nomeDoSite;
        let primeiroNomeAutor = req.body.primeiroNomeAutor;
        let segundoNomeAutor = req.body.segundoNomeAutor;
        let dataPublicacao = req.body.dataPublicacao;
        let linkDoSite = req.body.linkDoSite;

        if(codigo && nomeDoSite && primeiroNomeAutor && segundoNomeAutor && dataPublicacao && linkDoSite){
            await LinksService.alterar(codigo, nomeDoSite, primeiroNomeAutor, segundoNomeAutor, dataPublicacao, linkDoSite);
            json.result = {
                codigo,
                nomeDoSite, 
                primeiroNomeAutor, 
                segundoNomeAutor, 
                dataPublicacao, 
                linkDoSite
            };
        }else{
            json.error = 'Campos não enviados!';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};
        await LinksService.excluir(req.params.codigo);
        res.json(json);
    }
}