$(function() {

    var arrID = []; // 最初の順番
    var arrTR = []; // tr本体
    var arrName = []; // trの中の名前
    var arrArea = []; // trの中の面積

    // リストに値を格納 i:取り出したtrが何番目なのか
    $("#tableBody tr").each(function (i) {
        arrID.push(i);
        arrTR.push($(this));
        arrName.push($(this).find("td").eq(0).text());
        arrArea.push($(this).find("td").eq(1).text() * 1);
    });

    // 名前でソート　id1, id2: arrIDと同じ数値
    var sortName = function (id1, id2) {
        var aName = arrName[id1];
        var bName = arrName[id2];
        return aName > bName ? 1 : -1;
    };

    // 面積ソート　id1, id2: arrIDと同じ数値 returnは簡単に書ける
    var sortArea = function (id1, id2) {
        var aArea = arrArea[id1];
        var bArea = arrArea[id2];
        return aArea < bArea ? 1 : -1;
    };

    // ソートの反映
    var result = function () {
        // #tableBodyを空にする
        $("#tableBody").empty();
        // arrIDそれぞれに対してfunctionで処理を行う i:何番目か id:eachで取り出したID
        $.each(arrID, function (i, id) {
            $("#tableBody").append(arrTR[id]);
        });
    };


    // btn settings
    $("#sortName").click(function () {
        arrID.sort(sortName);
        result();
    });

    $("#sortArea").click(function () {
        arrID.sort(sortArea);
        result();
    });
});