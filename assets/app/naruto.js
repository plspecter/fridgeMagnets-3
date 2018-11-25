$(document).ready(function () {
console.log("ready")
    //create onclick event for naruto
    $(".naruto").on("click", function () {
        console.log("naruto was clicked")

        var narutoWord = $("<div>")

        narutoWord.text("naruto");
        narutoWord.addClass("click-naruto-color");
     
         //Append narutoWord variable to the display
         $("#display").append(narutoWord);

    })

    $(".sakura").on("click", function () {
        console.log("sakura was clicked")

        var sakuraWord = $("<div>")

        sakuraWord.text("sakura");
        sakuraWord.addClass("click-sakura-color");
     
         //Append narutoWord variable to the display
         $("#display").append(sakuraWord);

    })

    $("#clear").on("click", function () {
        console.log("clear click")
        $("#display").empty();

    })

})