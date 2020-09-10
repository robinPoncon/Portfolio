$(".langages").hover(function () {
    remplissage("#html", "85%", 2000);
    remplissage("#css", "80%", 2000);
    remplissage("#bootstrap", "40%", 2000);
    remplissage("#javascript", "60%", 2000);
    remplissage("#jquery", "70%", 2000);
    remplissage("#php", "60%", 2000);
    remplissage("#mysql", "40%", 2000);
    remplissage("#symfony", "50%", 2000);
    remplissage("#twig", "70%", 2000);
    remplissage("#wordpress", "40%", 2000);
});

function remplissage(cible, width, time)
{
    $(cible).animate({
        width: width
    }, time);
}




$(window).resize();


if ($(window).width() <= 992)
{
    $(".blocFormation1").hover(function(){
        $(".barreHorizon1").animate({
            width: "50px"
        }, 2000);
        $(".barreHorizon2").animate({
            width: "50px"
        }, 2000);
    });
    $(".blocFormation2").hover(function(){
        $(".barreHorizon3").animate({
            width: "50px"
        }, 2000);
        $(".barreHorizon4").animate({
            width: "50px"
        }, 2000);
    });
}

else
{
    $(".blocFormation1").hover(function(){
        $(".barreHorizon1").animate({
            width: "119px"
        }, 2000);
        $(".barreHorizon2").animate({
            width: "119px"
        }, 2000);
    });
    $(".blocFormation2").hover(function(){
        $(".barreHorizon3").animate({
            width: "119px"
        }, 2000);
        $(".barreHorizon4").animate({
            width: "119px"
        }, 2000);
    });
}

$(".hamburger").click(function(){
    $(".menu ul").css("display", "flex");
});