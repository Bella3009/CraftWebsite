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
        var comment = $(".comments").val();

        if (fName === "" || cNum === "" || email === ""){
            alert("All fields except the comments must be filled")
        }
        else {
            validVal = true

            if (fName.match(/^[a-zA-Z ]+$/) == null){
                alert("Full Name must be a name")
                validVal = false
            }
            if (cNum.match(/^[0-9]+$/) == null){
                alert("Contact Number must be only numbers")
                validVal = false
            }
            if (cNum.match(/^[0-9]+$/) == null){
                alert("Contact Number must be only numbers")
                validVal = false
            }
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if(!regex.test(email)) {
                alert("Email is not valid")
                validVal = false
            }
            
            if (validVal) {
                var body = fName + " just send you an email from the Contact Us page." + "%0D%0A" + 
                "Please contact the user on " + cNum + " and email: " + email + "%0D%0A" + "The user written comment: " + comment

                window.location = "mailto: sara.bella.i84760@mcast.edu.mt ?subject=CraftyMaker new email &body=" + body
            }
        }
        return false
    })

})


Fancybox.bind('[data-fancybox="Gallery"]', {

});
