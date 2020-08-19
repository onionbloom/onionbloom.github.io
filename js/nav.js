// JavaScript Document

$('#FirstHero').inView({
    in: function() {
        $('nav').toggleClass('d-none');
    },
    out: function() {
        $('nav').toggleClass('d-none');
    },
    threshold: 200
})


