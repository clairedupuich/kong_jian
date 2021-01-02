
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
//通过听这些元素的点击，可以确定是转到下一个图像还是上一个图像。在这两种情况下，使用幻灯片索引就足够了：如果转到下一张图像，索引将增加1；如果转到上一张图像，索引将减少1。 。
$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur
    $img.css('display', 'none'); // on cache les images
    $currentImg = $img.eq(i); // on définit la nouvelle image
    $currentImg.css('display', 'block'); // puis on l'affiche

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');

});
//然后，我们遇到了一个新问题：如果我们在两个函数之一上单击太多次，则计数器将不再遵循图像的索引。然后，我们可以得到一个当前图像，该图像不存在，因此无法显示。要解决此问题，您所要做的就是确保计数器不超过最后一个索引并且不能低于0：
$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});
//创建自动图像滚动




function maBoucle(){

    setTimeout(function(){
                        // affichera "Bonjour !" toutes les secondes
        maBoucle(); // relance la fonction
    }, 1000);

}

maBoucle(); // on oublie pas de lancer la fonction une première fois
