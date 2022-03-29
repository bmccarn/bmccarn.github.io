$(document).ready(function () {



        $("#image_list a").click(function (evt) {



                evt.preventDefault();

                var imageURL = $(this).attr("href");

                var caption = $(this).attr("title");

                $("#caption").fadeOut(1000, function () {

                        $("#caption").text(caption).fadeIn(1000);

                });

                $("#image").fadeOut(1000, function () {

                        $("#image").attr("src", imageURL).fadeIn(1000);

                });

        });


        $("li:first-child a").focus();

        $("#image").hide().fadeIn(1000);

        $("#caption").hide().fadeIn(1000);

});