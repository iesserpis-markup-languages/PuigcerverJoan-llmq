function isEven(){
    let number = $("#number-input").val();
    let message = "";

    if(number == 0){
        message = `${number} is zero`;
    } else if (number % 2 == 0) {
        message = `${number} is even`;
    } else {
        message = `${number} is odd`;
    }

    $("#result").text(message);
}

$(document).ready(function() {
    $("#number-input").change(function() {
        isEven();
    });

    isEven();
});
