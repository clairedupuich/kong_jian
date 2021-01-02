//定义购物车中单独一行的项目
function lignPanier(code， quanditie，prix){
    this. codeArticle = code;
    this.prixArticle = prix;
    this.quanditeArticle  = quandite;
    this.prixLigne = function (){
        this.prixArticle*this.quanditeArticle
    }
    //获取
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
            total = total + this.list[i].prixLigne();
        }
        return total;
    }
    this.getArticle = function (code){  //查看商品是否已经存在于购物车中
        for (let i = 0; i < this.list.length; i++) {
            if (code == this.list[i].getCodeArticle()) {
                  reurn i;
            }
            
        }
        return -1;
    }
    
    this.deleteArticle = function (code){
         let index = this.getArticle(code);
         if(index > -1){
             this.list.splice(index,1);
         }
    }
}
