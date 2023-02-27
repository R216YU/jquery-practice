$(function() {

    var template = $("#template").html();
    var cookie_name = "memoApp";


    var appendNewMemo = function(title, content) {
        var html = template.replace("[タイトル]", title).replace("[メモの内容]", content);
        $("#memoList").append(html);
    };

    // 追加ボタン
    var add = function() {
        var title = $("#inputTitle").val();
        var content = $("#inputContent").val();
        if (content == "" && title == "") return;

        appendNewMemo(title, content);

        saveMemo();
    };


    var saveMemo = function() {
        var memoArr = [];
        $("#memoList #memoBody").each(function() {
            var $this = $(this);
            var title = $this.find("#memoBodyTitle").text();
            var content = $this.find("#memoBodyContent").text();

            title = encodeURI(title);
            content = encodeURI(content);

            var obj = {title: title, content: content};
            memoArr.push(obj);
        });

        var cookie_value = JSON.stringify(memoArr);

        Cookies.set(cookie_name, cookie_value);
    };


    // リセットボタン
    var resetMemo = function() {
        $("#memoList").empty();
        Cookies.remove(cookie_name);
    };

    var restoreMemo = function() {
        var cookie_value = Cookies.get(cookie_name);
        if (cookie_value === undefined) return;

        try {
            var memoArr = JSON.parse(cookie_value);
        } catch (error) {
            console.log("[cookie read error]" + error);
            return;
        };

        for (var i = 0; i < memoArr.length; i ++) {
            var memo = memoArr[i];
            var title = memo.title;
            var content = memo.content;

            title = decodeURI(title);
            content = decodeURI(content);

            appendNewMemo(title, content);
        };
    };

    // ボタン設定

    $("#addBtn").click(add);
    $("#resetBtn").click(resetMemo);

    // サイトアクセス時に自動的に動作する関数
    restoreMemo();

});