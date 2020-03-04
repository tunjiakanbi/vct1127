$(function () {
    var rect1 = $("#Rectangle_1");
    var rect2 = $("#Rectangle_2");
    var rect3 = $("#Rectangle_3");
    var rect4 = $("#Rectangle_4");
    var rect5 = $("#Rectangle_5");
    var rect6 = $("#Rectangle_6");
    var rect7 = $("#Rectangle_7");
    var rect8 = $("#Rectangle_8");
    var rect9 = $("#Rectangle_9");
    var rect10 = $("#Rectangle_10");
    var rect11 = $("#Rectangle_11");
    var rect12 = $("#Rectangle_12");
    var rect13 = $("#Rectangle_13");
    var rectA = $(".rectA");
    var rectB = $(".rectB");
    var rectC = $(".rectC");
    var rectD = $(".rectD");
    var rectE = $(".rectE");
    var rectF = $(".rectF");
    var rectG = $(".rectG");
    var rectH = $(".rectH");
    var circle1 = $("#Ellipse_1");
    var circle2 = $("#Ellipse_2");
    var text = $("#demo");
    //console.log(rect1);

    var sD = 2;
    var mD = 4;
    var lD = 8;
    var ei = "power4.in";
    var eo = "power4.out";
    var tl1 = gsap.timeline({
        id: "tl1"
    });

    tl1.fromTo(rect1, mD, {
        opacity: 0,
        y: "-100%",
        ease: ei
    }, {
        opacity: 1,
        y: 0,
        ease: eo
    });


    //no code beyond this point
    GSDevTools.create();
});