var pic1Bool = false
var pic2Bool = false
var pic3Bool = false
var pic4Bool = false
var pic5Bool = false
var pic6Bool = false
var pic7Bool = false
var pic8Bool = false

function PrCartAdd() {
    alert("Product was added to cart");
};
function SrCartAdd() {
    alert("Service was added to cart");
};
function showDescPic1() {
    var descPar = document.getElementById("pic1Desc");
    if (pic1Bool) {
        descPar.innerHTML = ""
        pic1Bool = false
    }
    else {
        descPar.innerHTML = "A beautiful red yarn made of 100% cotton";
        pic1Bool = true
    }
}
function showDescPic2() {
    var descPar = document.getElementById("pic2Desc");
    if (pic2Bool) {
        descPar.innerHTML = ""
        pic2Bool = false
    }
    else {
        descPar.innerHTML = "A vibrant purple made of 100% cotton";
        pic2Bool = true
    }
}
function showDescPic3() {
    var descPar = document.getElementById("pic3Desc");
    if (pic3Bool) {
        descPar.innerHTML = ""
        pic3Bool = false
    }
    else {
        descPar.innerHTML = "A simple dusty white perfect for winter projects";
        pic3Bool = true
    }
}
function showDescPic4() {
    var descPar = document.getElementById("pic4Desc");
    if (pic4Bool) {
        descPar.innerHTML = ""
        pic4Bool = false
    }
    else {
        descPar.innerHTML = "A beautiful soft wool yarn";
        pic4Bool = true
    }
}
function showDescPic5() {
    var descPar = document.getElementById("pic5Desc");
    if (pic5Bool) {
        descPar.innerHTML = ""
        pic5Bool = false
    }
    else {
        descPar.innerHTML = "A soft yarn made of 100% wool";
        pic5Bool = true
    }
}
function showDescPic6() {
    var descPar = document.getElementById("pic6Desc");
    if (pic6Bool) {
        descPar.innerHTML = ""
        pic6Bool = false
    }
    else {
        descPar.innerHTML = "Start making your own crochet project with the basic techniques that you will learn in this course";
        pic6Bool = true
    }
}
function showDescPic7() {
    var descPar = document.getElementById("pic7Desc");
    if (pic7Bool) {
        descPar.innerHTML = ""
        pic7Bool = false
    }
    else {
        descPar.innerHTML = "Start making your own knitting project with the basic techniques that you will learn in this course";
        pic7Bool = true
    }
}
function showDescPic8() {
    var descPar = document.getElementById("pic8Desc");
    if (pic8Bool) {
        descPar.innerHTML = ""
        pic8Bool = false
    }
    else {
        descPar.innerHTML = "Improve your weaving skills with this course";
        pic8Bool = true
    }
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
