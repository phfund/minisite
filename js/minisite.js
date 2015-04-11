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

    })
})