$(function () {


    var calcFunc = function () {
        var inputText = $("#input").val(); // input取得
        var inputList = inputText.split("\n"); // inputを改行でリスト化

        var results = []; // 計算結果をまとめておくリスト
        for (row of inputList) {

            row = row.replace(/\s/g, ""); // inputの空白削除
            if (row == "") {continue;} // 行が空文の場合はスキップ

            var result;
            try {
                result = eval(row);
            } catch {
                continue
            };

            results.push(`${row} = ${result}`);
        };


        var outputText = results.join("\n");
        $("#output").val(outputText);
    };



    // ボタン設定
    $("#calcBtn").click(calcFunc);

});