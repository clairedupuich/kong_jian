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
        let total = 0;
        for (let i =o; i< this.list.length; i++){
            total = total + this.list[].prixLigne;
        }
        return this.total;
    }
}
