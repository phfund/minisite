/**
 * Created by admin on 2015/4/11.
 */

$(function () {
    $('.c_expender .c_item').click(function () {

        $(this).toggleClass('active')

    });

    $('.tab_top .item').click(function () {

        $(this).siblings().removeClass('active').end().addClass('active');
        $('.tab .body').hide();
        $($('.tab .body').get($(this).index())).show();

    });

    $(window).bind('scroll', function () {
        var tab_top = $('.tab_top'), //60
            list = $('.tab');

        if (list.length == 0 || tab_top.length == 0) {
            return !1;
        }

        var list_offset = list.offset(),
            list_offset_top = list_offset.top
            ;

        scroll_top = $(window).scrollTop();

        if (scroll_top > list_offset_top) {

            list.addClass('active');
        } else {
            list.removeClass('active');
        }


    })

})