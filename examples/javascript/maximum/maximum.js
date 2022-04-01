function computeMaximum(){
    let n1 = $("#number1").val();
    let n2 = $("#number2").val();
    let n3 = $("#number3").val();
    let max = Math.max(n1, n2, n3);
    $("#resultat").html(max);
}

$(document).ready(function(){
    $("#calcular-button").click(computeMaximum);
});