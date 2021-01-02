
//首先要确保正确加载了DOM，这要归功于ready()文档中启动的事件：
$(document).ready(function(){
    // notre code ici
});
//





function maBoucle(){

    setTimeout(function(){
                        // affichera "Bonjour !" toutes les secondes
        maBoucle(); // relance la fonction
    }, 1000);

}

maBoucle(); // on oublie pas de lancer la fonction une première fois
