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

    this.setQuanditieArticle = function (){
        this.quanditieArticle = this.quanditeArticle + quandite
    }
}

this
