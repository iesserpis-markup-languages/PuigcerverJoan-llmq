function computeMaximum(){
    let n1 = $("#number1").val();
    let n2 = $("#number2").val();
    let n3 = $("#number3").val();

    let max = Math.max(n1, n2, n3);
    let min = Math.min(n1, n2, n3);

    $("#maximum").text(max);
    $("#minimum").text(min);
}

$(document).ready(function(){
    computeMaximum();

    $("input").change(computeMaximum);
});
