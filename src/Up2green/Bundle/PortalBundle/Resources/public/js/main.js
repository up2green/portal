$(function() {

    var w = $(window).width();
    var h = $(window).height();

    $("#content section").css({width: w+'px', height: h+'px'});

    $("#section-1").css({top: '0', left: '0'});
    $("#section-2").css({top: '0', left: w+'px'});
    $("#section-3").css({top: '0', left: (w*2)+'px'});
    $("#section-4").css({top: h+'px', left: '0'});
    $("#section-5").css({top: h+'px', left: w+'px'});
    $("#section-6").css({top: h+'px', left: (w*2)+'px'});
    $("#section-7").css({top: (h*2)+'px', left: '0'});
    $("#section-8").css({top: (h*2)+'px', left: w+'px'});
    $("#section-9").css({top: (h*2)+'px', left: (w*2)+'px'});


    var path = $.fn.scrollPath("getPath")
        .moveTo(w+w/2, h+h/2, {name: 'section-5'})
        .lineTo(w+w/2, h/2, {name: 'section-2'})
        .lineTo(w*2+w/2, h/2, {name: 'section-3'})
        .lineTo(w*2+w/2, h+h/2, {name: 'section-6'})
        .lineTo(w*2+w/2, h*2+h/2, {name: 'section-9'})
        .lineTo(w+w/2, h*2+h/2, {name: 'section-8'})
        .lineTo(w/2, h*2+h/2, {name: 'section-7'})
        .lineTo(w/2, h+h/2, {name: 'section-4'})
        .lineTo(w/2, h/2, {name: 'section-1'});

    $("#content").scrollPath({
        drawPath: false,
        wrapAround: false,
        scrollBar: false
    });

    $( "[data-target-section]" ).click(function() {
        $.fn.scrollPath("scrollTo", $(this).data('target-section'), $(this).data('animation-duration'));
    });
});

