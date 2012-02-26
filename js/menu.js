var Menu = function (selector, callback) {
    var ui_menu = $(selector), choice;

    ui_menu.click(onMenuClick);
    choice = ui_menu.find("a.ui-active");
    callback(choice.attr("data-value"));

    function onMenuClick(e) {
        var targ = e.target, $targ;
        $targ = $(targ);
        if (targ.nodeName.toLowerCase() == "a") {
            callback($targ.attr("data-value"));
            choice.removeClass("ui-active");
            choice = $targ;
            $targ.addClass("ui-active");
            e.preventDefault();
        }
    }

}