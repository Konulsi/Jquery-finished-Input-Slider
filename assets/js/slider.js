$(document).ready(function () {

    $(document).on("click", ".right", rightIcon)
    $(document).on("click", ".left", leftIcon)

    $(document).on("mouseover", ".right", rightIcon)
    $(document).on("mouseover", ".left", leftIcon)


    function rightIcon() {
        let activeImage = $(".active");
        if ($(activeImage).next().length != 0) {
            $(activeImage).removeClass("active");
            $(activeImage).next().addClass("active");
        } else {
            $(activeImage).removeClass("active");
            $(activeImage).parent().children().eq(0).addClass("active");
        }
    }


    function leftIcon() {
        let activeImage = $(".active");

        if ($(activeImage).prev().length != 0) {
            $(activeImage).removeClass("active");
            $(activeImage).prev().addClass("active")
        } else {
            $(activeImage).removeClass("active");
            $(activeImage).parent().children().eq(2).addClass("active");
        }
    }

    // setInterval(() => {
    //     rightIcon();
    // }, 2000);

})