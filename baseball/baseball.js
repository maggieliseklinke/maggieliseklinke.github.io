$(function () {
    $("#insert").load("header.html");
});

$(document).ready(function () {
    $("#d").click(function () {
        $("#d").hide(1000);
        $("#c").show(1000);
    });
    $("#c").click(function () {
        $("#c").hide(1000);
        $("#d").show(1000);
    });
});


$.getJSON("baseball.json", function (data) {
            console.log(data); // this will show the info it in firebug console
            $.ajax({
                    url: "baseball.json",
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        if (url == //maggieliseklinke.github.io/baseball/Royals_2014.html)
                            {
                                $("#r1").text(data.Royals2014.Name)
                            }



                        }
                    });
            });





        // A function for changing a string to TitleCase
        function toTitleCase(str) {
            return str.replace(/\w+/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }