let i = 0;
let colors = ["red", "green", "blue", "yellow", "orange", "cyan"];

$(document).ready(function() {
    $("#button-background").click(function() {
        i++;
        if(i >= colors.length)
            i = 0;

        $("body").css("background-color", colors[i]);
        $("#index").html(i);
    });

    $("#button-hide-index").click(function() {
        $("#index").toggle();
    });
});
