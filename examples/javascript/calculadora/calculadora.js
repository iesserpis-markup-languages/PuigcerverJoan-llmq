let a = 0;

$(document).ready(function() {
    $("#calcular-button").click(function() {
        a++;
        $("#resultat").html(a);
    });
})