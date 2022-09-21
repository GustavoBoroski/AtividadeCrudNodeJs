const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM links', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },
    
    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM links WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nomeDoSite, primeiroNomeAutor, segundoNomeAutor, dataPublicacao, linkDoSite) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO links (nomeDoSite, primeiroNomeAutor, segundoNomeAutor, dataPublicacao, linkDoSite) VALUES (?, ?, ?, ?, ?)', 
                [nomeDoSite, primeiroNomeAutor, segundoNomeAutor, dataPublicacao, linkDoSite], (error, results)=>{ 
                    if(error) {rejeitado(error); return;}
                    aceito(results.insertCodigo);
            }); 
        });
    },

    alterar: (codigo, nomeDoSite, primeiroNomeAutor, segundoNomeAutor, dataPublicacao, linkDoSite) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE links SET nomeDoSite = ?, primeiroNomeAutor = ?, segundoNomeAutor = ?, dataPublicacao = ?, linkDoSite = ? WHERE codigo = ?', 
                [nomeDoSite, primeiroNomeAutor, segundoNomeAutor, dataPublicacao, linkDoSite, codigo], (error, results)=>{ 
                    if(error) {rejeitado(error); return;}
                    aceito(results);
            }); 
        });
    },

    excluir: (codigo) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM links WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};