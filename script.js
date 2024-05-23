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
})