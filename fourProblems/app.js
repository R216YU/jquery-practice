$(function() {

    // 回答の確認
    const checkAnswer = function() {
        // 回答を受け取る
        var p1 = $("input[name=p1]:checked").val();
        var p2 = $("input[name=p2]:checked").val();
        var p3 = $("input[name=p3]:checked").val();
        var p4 = $("input[name=p4]:checked").val();

        // 正解数をカウント
        var rightCount = 0;
        if (p1 === "3") {rightCount += 1};
        if (p2 === "2") {rightCount += 1};
        if (p3 === "3") {rightCount += 1};
        if (p4 === "1") {rightCount += 1};

        // 答えの表示を作成
        var rightPercent = Math.floor(rightCount / 4 * 100);
        var text = `正解率: ${rightPercent}%`;
        $("#answerText").empty().append(text);
        
        if (rightPercent === 0) {
            $("#answerPanel").addClass("bg-red-500");
        } else if (rightPercent === 25) {
            $("#answerPanel").addClass("bg-yellow-500");
        } else if (rightPercent === 50) {
            $("#answerPanel").addClass("bg-gray-500");
        } else if (rightPercent === 75) {
            $("#answerPanel").addClass("bg-green-500");
        } else if (rightPercent === 100) {
            $("#answerPanel").addClass("bg-blue-500");
        };
    };

    // ボタンの設定
    $("#btn").click(checkAnswer);
});