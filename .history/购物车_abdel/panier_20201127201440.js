function lignPanier (code quandite prix){
    this. codeArticle = code;
    this.prixArticle = prix;
    this.quanditeArticle  = quandite;
    this.prixLigne = function (){
        this.prixArticle*this.quanditeArticle
    }
    this.getCodeArticle = function (){
        return this.getCodeArticle;
    }

    this.ajoutQuanditieArticle = function (qte){
        this.quanditieArticle = this.quanditeArticle + qte;
    }
}

function panier(){
    this.list = [];
    this.ajouterlist = function(code, quantite,prix){
        this.list.push(new LignPanier(code,quantite,prix));
    }
     
    this.totalprice = function(){
        for (let index =o; index < Array.length; dindex++){
            const element = array[index];
        }
        return
    }
}
