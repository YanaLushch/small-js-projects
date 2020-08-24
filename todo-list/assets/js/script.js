$("ul").on("click", "li", function(){
    //check if li is grey
    if($(this).css("color") === "rgb(128, 128, 128)"){
        //turn black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        //then turn it to grey and add line-through
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });   
    }
});

$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input").keypress(function(event){
    //if we hit enter
    if (event.which === 13) {
        //extract the value from the input
        var toDoNew = $(this).val();
        //we empty the input string
        $(this).val("");
        //create a new li with the input which we extracted
        $("ul").append("<li><span class='bin'><i class='fa fa-trash'></i> </span> <span class='text'>" + toDoNew + "</span></li>");
    }
})
$(".fa-minus").click(function(){
    $("input").fadeToggle();
    $(this).toggleClass('fa-minus fa-plus');
});

