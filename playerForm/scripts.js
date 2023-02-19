$(function() {

    // nameCopy (text)
    var copyName = function() {
        var name = $("#name").val();
        $("#name2").val(name);
        console.log("text", name);
    };


    // roleCopy (radio)
    var copyRole = function() {
        var role = $("input[name=role]:checked").val();
        $("input[name=role2]").val([role]);
        console.log("radio", role);
    };


    // mapCopy (select)
    var copyMaps = function() {
        var maps = $("#maps").val();
        $("#maps2").val(maps);
        console.log("select", maps);
    };


    // textCopy (textarea)
    var copyText = function() {
        var textarea = $("#text").val();
        $("#text2").val(textarea);
        console.log("textarea", textarea);
    };


    // allCopyFNC
    var copyAll = function() {
        console.log("------------------");
        copyName();
        copyRole();
        copyMaps();
        copyText();
    };


    // checkBlankFNC
    var checkBlank = function() {
        if ($("#name").val() == "") {
            alert("[Name]が空です。");
            return true;
        }
        if ($("input[type=checkbox]:checked").val() === undefined) {
            alert("[Agent]が選択されていません。");
            return true;
        }
        if ($("input[name=role]:checked").val() === undefined) {
            alert("[Role]が選択されていません。");
            return true;
        }
        if ($("#maps").val() === null) {
            alert("[Map]が選択されていません。");
            return true;
        }
        if ($("#text").val() == "") {
            alert("[自由記入欄]が空です。");
            return true;
        }

        return false;
    }




    // button
    $("#inputArea").submit(function() {
        var isBlank = checkBlank();
        if (isBlank) {
            console.log("stop");
            return false;
        }
    });

    $("#btnCopy").click(copyAll);


});