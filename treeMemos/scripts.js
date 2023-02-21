$(function() {

	// コピー用テンプレート
	var template = $("#template").html();


	// APPEND
	var append = function() {

		// メモ名を取得
		var text = $("#line").val();
		// メモの置き場所
		var $target = $("input[name=sel]:checked").parents("li").eq(0);
		// メモのHTML作成
		var html = template.replace("%s", text);
		// メモをHTMLに追加
		$target.after(html);
		// 追加したメモにチェックを入れる
		$target.next().find("input").prop("checked", true);
	};


	// NEST
	var nest = function() {

		// メモ名を取得
		var text = $("#line").val();
		// メモの置き場所
		var $target = $("input[name=sel]:checked").parents("li").eq(0);
		// メモのHTML作成
		var html = "<ul>" +  template.replace("%s", text) + "</ul>";
		// メモをHTMLに追加
		$target.append(html);
		// 追加したメモにチェックを入れる
		$target.find("li input").prop("checked", true);
	};



	// BTN SETTING
	$("#btnAppend").click(append);
	$("#btnNest").click(nest);

	
});