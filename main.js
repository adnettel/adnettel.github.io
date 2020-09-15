$("a, h1, header").animate({"opacity": "1"}, 800)


$("#linkedin").click(function(){
    $('a, h1, header').fadeOut(800);
});
$("#linkedin").mouseenter(function(){
    $('#linkedin a').animate({"font-size": "5.2em"}, 100)
});
$("#linkedin").mouseleave(function(){
    $('#linkedin a').animate({"font-size": "5em"}, 100)
});


$("#github").click(function(){
    $('a, h1, header').fadeOut(800);
});
$("#github").mouseenter(function(){
    $('#github a').animate({"font-size": "5.2em"}, 100)
});
$("#github").mouseleave(function(){
    $('#github a').animate({"font-size": "5em"}, 100)
});

$("#tableau").click(function(){
    $('a, h1, header').fadeOut(800);
});
$("#tableau").mouseenter(function(){
    $('#tableau a').animate({"font-size": "5.2em"}, 100)
});
$("#tableau").mouseleave(function(){
    $('#tableau a').animate({"font-size": "5em"}, 100)
});


$("#email").mouseenter(function(){
    $('#email a').animate({"font-size": "5.2em"}, 100)
});
$("#email").mouseleave(function(){
    $('#email a').animate({"font-size": "5em"}, 100)
});


$("#resume").click(function(){
    $('a, h1, header').fadeOut(800);
});
$("#resume").mouseenter(function(){
    $('#resume a').animate({"font-size": "5.2em"}, 100)
});
$("#resume").mouseleave(function(){
    $('#resume a').animate({"font-size": "5em"}, 100)
});


$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload() 
    }
});

