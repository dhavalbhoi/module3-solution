$(document).ready(function () {

    // Close the mobile menu after
    // clicking Chicken, Beef or Sushi
    $(".navbar-nav li a").click(function () {

        $("#mobile-menu").collapse("hide");

    });

});

