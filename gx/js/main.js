$(function () {

    var initIndex = location.href.split("?page=")[1] || 0;
    // var curIndex;
    mySwiper = new Swiper('#swiper-container', {
        direction: 'vertical',
        // history:' ',
        pagination:'.swiper-pagination',
        paginationClickable:true,
        loop: false,//默认false
        speed: 300,//默认300
        keyboardControl:true,
        mousewheelControl:true,
        initialSlide: initIndex,
        onTransitionEnd: function (swiper) {
            pageChange(swiper.activeIndex);
        }
    })

    pageChange(initIndex);


    function pageChange(curIndex) {
        var curPage = $(".page").eq(curIndex);
        //控制翻页后刷新动画
        $(".page").find(".elm").removeClass("animated");
        //加入动画
        curPage.find(".elm").addClass("animated");
        //最后一页隐藏箭头（可以改进）
        $(".downArrow").attr("class", "downArrow downArrow" + (curIndex + 1))
        curIndex >= $(".page").length - 1 ? $(".downArrow").hide() : $(".downArrow").show();
    }

    var timer1 = setTimeout(function () {
        $("#p4circle").animate('transform',500,easing)
    },3500)



})
