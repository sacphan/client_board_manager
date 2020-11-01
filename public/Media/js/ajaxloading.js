
jQuery.ajaxSetup({
    beforeSend: function () {
        $(".preloader").css("background", "#fff6");
        $('.preloader').show();
    },
    complete: function () {
        $('.preloader').hide();
        $(".preloader").css("background", "##fff");
    }
});