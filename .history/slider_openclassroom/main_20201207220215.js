
//首先要确保正确加载了DOM，这要归功于ready()文档中启动的事件：
$(document).ready(function(){
    // notre code ici
});
//然后必须定义几个变量。在启动jQuery代码之前，要做的一件好事是列出您将需要使用的所有对象以及所需的所有信息。在这里，仅将两个元素作为目标就足够了：轮播的块以及其中包含的图像。





function maBoucle(){

    setTimeout(function(){
                        // affichera "Bonjour !" toutes les secondes
        maBoucle(); // relance la fonction
    }, 1000);

}

maBoucle(); // on oublie pas de lancer la fonction une première fois
