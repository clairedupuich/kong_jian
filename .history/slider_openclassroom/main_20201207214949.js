function maBoucle(){

    setTimeout(function(){
        alert('Bonjour !'); // affichera "Bonjour !" toutes les secondes
        maBoucle(); // relance la fonction
    }, 1000);

}

maBoucle(); // on oublie pas de lancer la fonction une première fois
