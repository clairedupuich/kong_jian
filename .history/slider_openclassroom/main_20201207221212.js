
//首先要确保正确加载了DOM，这要归功于ready()文档中启动的事件：
$(document).ready(function(){
    // notre code ici
});
//然后必须定义几个变量。在启动jQuery代码之前，要做的一件好事是列出您将需要使用的所有对象以及所需的所有信息。在这里，仅将两个元素作为目标就足够了：轮播的块以及其中包含的图像。
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
//   创建变量后，有必要确保除一张以外的所有图像都是不可见的。 
    $img.css('display', 'none'); // on cache les images
    $currentImg.css('display', 'block'); // on affiche seulement l'image courante
//   创建控件：上一张图片和下一张图片
// 奠定了系统的基础之后，现在让我们来研究图像控件，也就是说，上一个或下一个图像的显示功能。HTML结构不包含用于与页面交互的两个元素，因此必须使用DOM操作方法来创建它们。我们建议append()您使用，尽管您也可以使用其他功能。

// 我们选择创建一个div包含两个块span，分别具有class.prev和.next。
$carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');
//



function maBoucle(){

    setTimeout(function(){
                        // affichera "Bonjour !" toutes les secondes
        maBoucle(); // relance la fonction
    }, 1000);

}

maBoucle(); // on oublie pas de lancer la fonction une première fois
