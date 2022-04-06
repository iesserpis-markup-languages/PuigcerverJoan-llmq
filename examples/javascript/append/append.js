$(document).ready(function() {
    $("#button-append").click(function() {
        let text = $("#text-input").val();
        $("#container").append("<p>" + text + "</p>");
        $("#text-input").val("");
    });
});