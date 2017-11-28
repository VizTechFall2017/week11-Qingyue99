d3.select("#bubble").style("height", "100px");

    function st(s){
        document.getElementById('bubble').style.visibility = 'visible';
        var change = document.getElementById('tmp');
        change.src = s;

    }
function sd(s){
    document.getElementById('bubble').style.visibility = 'hidden';
    var change = document.getElementById('tmp');
    change.src = s;
}




$(document).ready(function(){
    $('circle',document).each(function(){
        $(this).mouseenter(function(){
            if($(this).css('fill')=='rgb(88, 89, 91)'){ $(this).css('fill', '#fff'); }
        });
        $(this).mouseleave(function(){
            if($(this).css('fill')=='rgb(255, 255, 255)'){ $(this).css('fill', 'rgb(88, 89, 91)'); }
        });
    });
    $('text', document).addClass('headclass');
    $('tspan', document).addClass('headclass');
    $('svg#Layer_1 path',document).each(function(){
        $(this).mouseenter(function(){
            console.log($(this).css('fill'));
            if($(this).css('fill')=='rgb(89, 89, 91)'){ $(this).css('fill', '#fff'); }
        });
        $(this).mouseleave(function(){
            if($(this).css('fill')=='rgb(255, 255, 255)'){ $(this).css('fill', 'rgb(89, 89, 91)'); }
        });
    });

});
