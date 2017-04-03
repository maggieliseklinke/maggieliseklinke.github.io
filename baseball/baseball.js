$(document).ready(function () {
    $("#pic1").click(function () {
        $("#pic1").hide(1000);
        $("#text1").show(1000);
    });
    $("#text1").click(function () {
        $("#text1").hide(1000);
        $("#pic1").show(1000);
    });

    $("#pic2").click(function () {
        $("#pic2").hide(1000);
        $("#text2").show(1000);
    });
    $("#text2").click(function () {
        $("#text2").hide(1000);
        $("#pic2").show(1000);
    });

    $("#pic3").click(function () {
        $("#pic3").hide(1000);
        $("#text3").show(1000);
    });
    $("#text3").click(function () {
        $("#text3").hide(1000);
        $("#pic3").show(1000);
    });

    $("#pic4").click(function () {
        $("#pic4").hide(1000);
        $("#text4").show(1000);
    });
    $("#text4").click(function () {
        $("#text4").hide(1000);
        $("#pic4").show(1000);
    });

    $("#pic5").click(function () {
        $("#pic5").hide(1000);
        $("#text5").show(1000);
    });
    $("#text5").click(function () {
        $("#text5").hide(1000);
        $("#pic5").show(1000);
    });

    $("#pic6").click(function () {
        $("#pic6").hide(1000);
        $("#text6").show(1000);
    });
    $("#text6").click(function () {
        $("#text6").hide(1000);
        $("#pic6").show(1000);
    });

    $("#pic7").click(function () {
        $("#pic7").hide(1000);
        $("#text7").show(1000);
    });
    $("#text7").click(function () {
        $("#text7").hide(1000);
        $("#pic7").show(1000);
    });

    $("#pic8").click(function () {
        $("#pic8").hide(1000);
        $("#text8").show(1000);
    });
    $("#text8").click(function () {
        $("#text8").hide(1000);
        $("#pic8").show(1000);
    });


    $("#ppic1").click(function () {
        $("#ppic1").hide(1000);
        $("#ttext1").show(1000);
    });
    $("#ttext1").click(function () {
        $("#ttext1").hide(1000);
        $("#ppic1").show(1000);
    });

    $("#ppic2").click(function () {
        $("#ppic2").hide(1000);
        $("#ttext2").show(1000);
    });
    $("#ttext2").click(function () {
        $("#ttext2").hide(1000);
        $("#ppic2").show(1000);
    });
    $("#ppic3").click(function () {
        $("#ppic3").hide(1000);
        $("#ttext3").show(1000);
    });
    $("#ttext3").click(function () {
        $("#ttext3").hide(1000);
        $("#ppic3").show(1000);
    });
    $("#ppic4").click(function () {
        $("#ppic4").hide(1000);
        $("#ttext4").show(1000);
    });
    $("#ttext4").click(function () {
        $("#ttext4").hide(1000);
        $("#ppic4").show(1000);
    });
    $("#ppic5").click(function () {
        $("#ppic5").hide(1000);
        $("#ttext5").show(1000);
    });
    $("#ttext5").click(function () {
        $("#ttext5").hide(1000);
        $("#ppic5").show(1000);
    });
    $("#ppic6").click(function () {
        $("#ppic6").hide(1000);
        $("#ttext6").show(1000);
    });
    $("#ttext6").click(function () {
        $("#ttext6").hide(1000);
        $("#ppic6").show(1000);
    });
    $("#ppic7").click(function () {
        $("#ppic7").hide(1000);
        $("#ttext7").show(1000);
    });
    $("#ttext7").click(function () {
        $("#ttext7").hide(1000);
        $("#ppic7").show(1000);
    });
    $("#ppic8").click(function () {
        $("#ppic8").hide(1000);
        $("#ttext8").show(1000);
    });
    $("#ttext8").click(function () {
        $("#ttext8").hide(1000);
        $("#ppic8").show(1000);
    });
});

$('.playerpic').hover(function () {
    $(this).css('cursor', 'pointer');
});

$('.hide').hover(function () {
    $(this).css('cursor', 'pointer');
});




$.getJSON("baseball.json", function (data) {
        console.log(data);
        $("#r1name1").text("Name: " + data.Royals2014.One.Name)
        $("#r1num1").text("Jersey Number: " + data.Royals2014.One.Number)
        $("#r1pos1").text("Position: " + data.Royals2014.One.Pos)
        $("#r1rbi1").text("RBI: " + data.Royals2014.One.RBI)
        $("#r1home1").text("Home Runs: " + data.Royals2014.One.Home)

        $("#r1name2").text("Name: " + data.Royals2014.Two.Name)
        $("#r1num2").text("Jersey Number: " + data.Royals2014.Two.Number)
        $("#r1pos2").text("Position: " + data.Royals2014.Two.Pos)
        $("#r1rbi2").text("RBI: " + data.Royals2014.Two.RBI)
        $("#r1home2").text("Home Runs: " + data.Royals2014.Two.Home)

        $("#r1name3").text("Name: " + data.Royals2014.Three.Name)
        $("#r1num3").text("Jersey Number: " + data.Royals2014.Three.Number)
        $("#r1pos3").text("Position: " + data.Royals2014.Three.Pos)
        $("#r1rbi3").text("RBI: " + data.Royals2014.Three.RBI)
        $("#r1home3").text("Home Runs: " + data.Royals2014.Three.Home)

        $("#r1name4").text("Name: " + data.Royals2014.Four.Name)
        $("#r1num4").text("Jersey Number: " + data.Royals2014.Four.Number)
        $("#r1pos4").text("Position: " + data.Royals2014.Four.Pos)
        $("#r1rbi4").text("RBI: " + data.Royals2014.Four.RBI)
        $("#r1home4").text("Home Runs: " + data.Royals2014.Four.Home)

        $("#r1name5").text("Name: " + data.Royals2014.Five.Name)
        $("#r1num5").text("Jersey Number: " + data.Royals2014.Five.Number)
        $("#r1pos5").text("Position: " + data.Royals2014.Five.Pos)
        $("#r1rbi5").text("RBI: " + data.Royals2014.Five.RBI)
        $("#r1home5").text("Home Runs: " + data.Royals2014.Five.Home)

        $("#r1name6").text("Name: " + data.Royals2014.Six.Name)
        $("#r1num6").text("Jersey Number: " + data.Royals2014.Six.Number)
        $("#r1pos6").text("Position: " + data.Royals2014.Six.Pos)
        $("#r1rbi6").text("RBI: " + data.Royals2014.Six.RBI)
        $("#r1home6").text("Home Runs: " + data.Royals2014.Six.Home)

        $("#r1name7").text("Name: " + data.Royals2014.Seven.Name)
        $("#r1num7").text("Jersey Number: " + data.Royals2014.Seven.Number)
        $("#r1pos7").text("Position: " + data.Royals2014.Seven.Pos)
        $("#r1rbi7").text("RBI: " + data.Royals2014.Seven.RBI)
        $("#r1home7").text("Home Runs: " + data.Royals2014.Seven.Home)

        $("#r1name8").text("Name: " + data.Royals2014.Eight.Name)
        $("#r1num8").text("Jersey Number: " + data.Royals2014.Eight.Number)
        $("#r1pos8").text("Position: " + data.Royals2014.Eight.Pos)
        $("#r1rbi8").text("RBI: " + data.Royals2014.Eight.RBI)
        $("#r1home8").text("Home Runs: " + data.Royals2014.Eight.Home)
    })
    .fail(function (jqxhr, status, error) {
        console.log('error', status, error)
    });

$(function () {
    $("#insert").load("header.html");
});


$("#page-nav").on("click", "a", function (evt) {
    evt.preventDefault();
    console.log('click occured');
    // With the text value get the needed value from the weather.json file
    var team = $(this).text(); // Franklin, etc...
    console.log(jsonCity);
    $.ajax({
        url: "https://blainerobertson.github.io/230d2l/js/weather.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log(data[jsonCity]);
            var zip = data[jsonCity].zip;
            console.log(zip);
            getData(zip);
        }
    });
});