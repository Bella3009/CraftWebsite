function PrCartAdd() {
    alert("Product was added to cart");
};
function SrCartAdd() {
    alert("Service was added to cart");
};
function showDesc() {
    var descPar = document.getElementById("descP");
    descPar.innerHTML = "High Quality product of 100g each yarn";
}

$(document).ready(function() {
    $("#menuImg").click(function(){
        if ($("nav").is(":visible")){
            $("nav").slideUp();
        }
        else {
            $("nav").slideDown();
        }
    })
    $(".btnContact").click(function(){
        var fName = $(".fName").val();
        var cNum = $(".cNum").val();
        var email = $(".email").val();
        var comment = $(".comment").val();

        if (fName === "" || cNum === "" || email === ""){
            alert("All fields except the comments must be filled")
        }
    })

})


Fancybox.bind('[data-fancybox="Gallery"]', {

});
