$(function() {

	var taxCalc = function() {
		// Inputs 入力
		var price = $("#price").val() * 1;
		var tax = $("#tax").val() * 1;

		// Calc 計算
		var taxAmount = Math.floor(price * tax / 100);
		var taxIncluded = price + taxAmount;

		// Outputs 出力
		$("#taxAmount").val(taxAmount);
		$("#taxIncluded").val(taxIncluded);
	};

	// Button 実行ボタン
	$("#execute").click(taxCalc);
	
});