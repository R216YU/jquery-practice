$(function() {

    var execute = function() {
        // 入力からテキストを取得
        var input = $("#input textarea").val();

        // inputを正規表現に掛けてHTMLに変換する
        var re = /(https?:\/\/[a-zA-Z0-9\-_\.:@!~*'\(¥);\/?&=\+$,%#]+)/g;
        var output = input.replace(re, '<a href="$1" target="_blank">$1</a>');

        // 出力にoutputを表示
        $("#output textarea").val(output);

        // プレビューを出力
        $("#preview div").empty().html(output);
    };

    // ボタン設定
    $("#btn").click(execute);

});