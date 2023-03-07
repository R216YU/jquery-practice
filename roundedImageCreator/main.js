$(function() {

    // 矩形の描画
    var canvas = $("#kukei").get(0); //キャンバスのDOM取得

    if (! canvas || ! canvas.getContext) {
        return;
    } //canvasに対応しているのはHTML5 対応しているか確認

    var context = canvas.getContext("2d"); //DOMから下地作成(今回は2D)
    var w = canvas.width; //canvasの横幅
    var h = canvas.height; //canvasの高さ

    context.fillStyle = "#ffc"; //塗りつぶす色
    context.fillRect(0,0, w,h); //範囲を座標で指定

    context.lineWidth = 5; //線の太さ
    context.strokeStyle = "#f00"; //線の色
    context.strokeRect(50,50, w-100,h-100); //範囲を座標で指定

    context.fillStyle = "#00f";
    context.fillRect(100,100, w-200,h-200);


    // 文字の描画
    var canvas = $("#mozi").get(0); //キャンバスのDOM取得

    if (! canvas || ! canvas.getContext) {
        return;
    } //canvasに対応しているのはHTML5 対応しているか確認

    var context = canvas.getContext("2d"); //DOMから下地作成(今回は2D)
    var w = canvas.width; //canvasの横幅
    var h = canvas.height; //canvasの高さ

    context.fillStyle = "#ffc"; //塗りつぶす色
    context.fillRect(0,0, w,h); //範囲を座標で指定

    var text = "あいうえおabcdef0123"; //文字のスタイルを設定
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 64px sans-serif";

    context.lineWidth = 5;
    context.strokeStyle = "#f00";
    context.strokeText(text, w/2, h/3, w);

    context.fillStyle = "#00f";
    context.fillText(text, w/2, h/3*2, w);

    // 線の描画
    var canvas = $("#sen").get(0); //キャンバスのDOM取得

    if (! canvas || ! canvas.getContext) {
        return;
    } //canvasに対応しているのはHTML5 対応しているか確認

    var context = canvas.getContext("2d"); //DOMから下地作成(今回は2D)
    var w = canvas.width; //canvasの横幅
    var h = canvas.height; //canvasの高さ

    context.fillStyle = "#ffc"; //塗りつぶす色
    context.fillRect(0,0, w,h); //範囲を座標で指定

    context.beginPath();

    context.moveTo(w*0.1, h*0.1); // 点Aの位置 線をつなぐときの開始地点
    context.lineTo(w*0.4, h*0.5); // 点A -> 点B
    context.lineTo(w*0.1, h*0.9); // 点B -> 点C
    context.closePath(); // 点C -> 点A

    context.moveTo(w*0.6, h*0.1);
    context.lineTo(w*0.9, h*0.5);
    context.lineTo(w*0.6, h*0.9);

    context.fillStyle = "#00f";
    context.fill();

    context.lineWidth = 10;
    context.strokeStyle = "#f00";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();


    // 円の描画
    var canvas = $("#en").get(0); //キャンバスのDOM取得

    if (! canvas || ! canvas.getContext) {
        return;
    } //canvasに対応しているのはHTML5 対応しているか確認

    var context = canvas.getContext("2d"); //DOMから下地作成(今回は2D)
    var w = canvas.width; //canvasの横幅
    var h = canvas.height; //canvasの高さ

    context.fillStyle = "#ffc"; //塗りつぶす色
    context.fillRect(0,0, w,h); //範囲を座標で指定

    context.lineWidth = 1;
    context.strokeStyle = "#f00";

    var x = w * 0.5; // 中心のx座標
    var y = h * 0.5; // 中心のy座標
    var radius = h * 0.45; // 半径
    var startAngle = 0;
    var endAngle = Math.PI * 1.25;
    var anticlockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.arc(x, y, radius*0.5, startAngle, endAngle, !anticlockwise);
    context.stroke();


});