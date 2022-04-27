function toggleClass(){
    $(this).toggleClass("main");
}

$(document).ready(function() {
    $("li").click(toggleClass);
});
