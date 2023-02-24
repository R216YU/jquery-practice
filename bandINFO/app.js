$(function() {

    // ホバーエフェクト
    $(".band").hover(
        function () {
            $(this).css({"background": "#ffc"});
            displayText(this);
        },
        function () {
            $(this).css({"background": "#fff"});
        }
    );

    // 説明の表示
    var displayText = function (target) {
        var text = $(target).find(".span").text();
        $(".exp").val(text);
    }
});