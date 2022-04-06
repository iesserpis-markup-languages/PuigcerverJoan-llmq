function updateResolution(){
    let width = $(document).width();
    let height = $(document).height();
    $("#result").text(width + "x" + height);
}

$(document).ready(function() {
    $(window).resize(updateResolution);

    updateResolution();
});