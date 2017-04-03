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

        $("#r2name1").text("Name: " + data.Royals2017.One.Name)
        $("#r2num1").text("Jersey Number: " + data.Royals2017.One.Number)
        $("#r2pos1").text("Position: " + data.Royals2017.One.Pos)
        $("#r2rbi1").text("RBI: " + data.Royals2017.One.RBI)
        $("#r2home1").text("Home Runs: " + data.Royals2017.One.Home)

        $("#r2name2").text("Name: " + data.Royals2017.Two.Name)
        $("#r2num2").text("Jersey Number: " + data.Royals2017.Two.Number)
        $("#r2pos2").text("Position: " + data.Royals2017.Two.Pos)
        $("#r2rbi2").text("RBI: " + data.Royals2017.Two.RBI)
        $("#r2home2").text("Home Runs: " + data.Royals2017.Two.Home)

        $("#r2name3").text("Name: " + data.Royals2017.Three.Name)
        $("#r2num3").text("Jersey Number: " + data.Royals2017.Three.Number)
        $("#r2pos3").text("Position: " + data.Royals2017.Three.Pos)
        $("#r2rbi3").text("RBI: " + data.Royals2017.Three.RBI)
        $("#r2home3").text("Home Runs: " + data.Royals2017.Three.Home)

        $("#r2name4").text("Name: " + data.Royals2017.Four.Name)
        $("#r2num4").text("Jersey Number: " + data.Royals2017.Four.Number)
        $("#r2pos4").text("Position: " + data.Royals2017.Four.Pos)
        $("#r2rbi4").text("RBI: " + data.Royals2017.Four.RBI)
        $("#r2home4").text("Home Runs: " + data.Royals2017.Four.Home)

        $("#r2name5").text("Name: " + data.Royals2017.Five.Name)
        $("#r2num5").text("Jersey Number: " + data.Royals2017.Five.Number)
        $("#r2pos5").text("Position: " + data.Royals2017.Five.Pos)
        $("#r2rbi5").text("RBI: " + data.Royals2017.Five.RBI)
        $("#r2home5").text("Home Runs: " + data.Royals2017.Five.Home)

        $("#r2name6").text("Name: " + data.Royals2017.Six.Name)
        $("#r2num6").text("Jersey Number: " + data.Royals2017.Six.Number)
        $("#r2pos6").text("Position: " + data.Royals2017.Six.Pos)
        $("#r2rbi6").text("RBI: " + data.Royals2017.Six.RBI)
        $("#r2home6").text("Home Runs: " + data.Royals2017.Six.Home)

        $("#r2name7").text("Name: " + data.Royals2017.Seven.Name)
        $("#r2num7").text("Jersey Number: " + data.Royals2017.Seven.Number)
        $("#r2pos7").text("Position: " + data.Royals2017.Seven.Pos)
        $("#r2rbi7").text("RBI: " + data.Royals2017.Seven.RBI)
        $("#r2home7").text("Home Runs: " + data.Royals2017.Seven.Home)

        $("#r2name8").text("Name: " + data.Royals2017.Eight.Name)
        $("#r2num8").text("Jersey Number: " + data.Royals2017.Eight.Number)
        $("#r2pos8").text("Position: " + data.Royals2017.Eight.Pos)
        $("#r2rbi8").text("RBI: " + data.Royals2017.Eight.RBI)
        $("#r2home8").text("Home Runs: " + data.Royals2017.Eight.Home)

        $("#r3name1").text("Name: " + data.Royals2015.One.Name)
        $("#r3num1").text("Jersey Number: " + data.Royals2015.One.Number)
        $("#r3pos1").text("Position: " + data.Royals2015.One.Pos)
        $("#r3rbi1").text("RBI: " + data.Royals2015.One.RBI)
        $("#r3home1").text("Home Runs: " + data.Royals2015.One.Home)

        $("#r3name2").text("Name: " + data.Royals2015.Two.Name)
        $("#r3num2").text("Jersey Number: " + data.Royals2015.Two.Number)
        $("#r3pos2").text("Position: " + data.Royals2015.Two.Pos)
        $("#r3rbi2").text("RBI: " + data.Royals2015.Two.RBI)
        $("#r3home2").text("Home Runs: " + data.Royals2015.Two.Home)

        $("#r3name3").text("Name: " + data.Royals2015.Three.Name)
        $("#r3num3").text("Jersey Number: " + data.Royals2015.Three.Number)
        $("#r3pos3").text("Position: " + data.Royals2015.Three.Pos)
        $("#r3rbi3").text("RBI: " + data.Royals2015.Three.RBI)
        $("#r3home3").text("Home Runs: " + data.Royals2015.Three.Home)

        $("#r3name4").text("Name: " + data.Royals2015.Four.Name)
        $("#r3num4").text("Jersey Number: " + data.Royals2015.Four.Number)
        $("#r3pos4").text("Position: " + data.Royals2015.Four.Pos)
        $("#r3rbi4").text("RBI: " + data.Royals2015.Four.RBI)
        $("#r3home4").text("Home Runs: " + data.Royals2015.Four.Home)

        $("#r3name5").text("Name: " + data.Royals2015.Five.Name)
        $("#r3num5").text("Jersey Number: " + data.Royals2015.Five.Number)
        $("#r3pos5").text("Position: " + data.Royals2015.Five.Pos)
        $("#r3rbi5").text("RBI: " + data.Royals2015.Five.RBI)
        $("#r3home5").text("Home Runs: " + data.Royals2015.Five.Home)

        $("#r3name6").text("Name: " + data.Royals2015.Six.Name)
        $("#r3num6").text("Jersey Number: " + data.Royals2015.Six.Number)
        $("#r3pos6").text("Position: " + data.Royals2015.Six.Pos)
        $("#r3rbi6").text("RBI: " + data.Royals2015.Six.RBI)
        $("#r3home6").text("Home Runs: " + data.Royals2015.Six.Home)

        $("#r3name7").text("Name: " + data.Royals2015.Seven.Name)
        $("#r3num7").text("Jersey Number: " + data.Royals2015.Seven.Number)
        $("#r3pos7").text("Position: " + data.Royals2015.Seven.Pos)
        $("#r3rbi7").text("RBI: " + data.Royals2015.Seven.RBI)
        $("#r3home7").text("Home Runs: " + data.Royals2015.Seven.Home)

        $("#r3name8").text("Name: " + data.Royals2015.Eight.Name)
        $("#r3num8").text("Jersey Number: " + data.Royals2015.Eight.Number)
        $("#r3pos8").text("Position: " + data.Royals2015.Eight.Pos)
        $("#r3rbi8").text("RBI: " + data.Royals2015.Eight.RBI)
        $("#r3home8").text("Home Runs: " + data.Royals2015.Eight.Home)

        $("#m1name1").text("Name: " + data.Mets.One.Name)
        $("#m1num1").text("Jersey Number: " + data.Mets.One.Number)
        $("#m1pos1").text("Position: " + data.Mets.One.Pos)
        $("#m1rbi1").text("RBI: " + data.Mets.One.RBI)
        $("#m1home1").text("Home Runs: " + data.Mets.One.Home)

        $("#m1name2").text("Name: " + data.Mets.Two.Name)
        $("#m1num2").text("Jersey Number: " + data.Mets.Two.Number)
        $("#m1pos2").text("Position: " + data.Mets.Two.Pos)
        $("#m1rbi2").text("RBI: " + data.Mets.Two.RBI)
        $("#m1home2").text("Home Runs: " + data.Mets.Two.Home)

        $("#m1name3").text("Name: " + data.Mets.Three.Name)
        $("#m1num3").text("Jersey Number: " + data.Mets.Three.Number)
        $("#m1pos3").text("Position: " + data.Mets.Three.Pos)
        $("#m1rbi3").text("RBI: " + data.Mets.Three.RBI)
        $("#m1home3").text("Home Runs: " + data.Mets.Three.Home)

        $("#m1name4").text("Name: " + data.Mets.Four.Name)
        $("#m1num4").text("Jersey Number: " + data.Mets.Four.Number)
        $("#m1pos4").text("Position: " + data.Mets.Four.Pos)
        $("#m1rbi4").text("RBI: " + data.Mets.Four.RBI)
        $("#m1home4").text("Home Runs: " + data.Mets.Four.Home)

        $("#m1name5").text("Name: " + data.Mets.Five.Name)
        $("#m1num5").text("Jersey Number: " + data.Mets.Five.Number)
        $("#m1pos5").text("Position: " + data.Mets.Five.Pos)
        $("#m1rbi5").text("RBI: " + data.Mets.Five.RBI)
        $("#m1home5").text("Home Runs: " + data.Mets.Five.Home)

        $("#m1name6").text("Name: " + data.Mets.Six.Name)
        $("#m1num6").text("Jersey Number: " + data.Mets.Six.Number)
        $("#m1pos6").text("Position: " + data.Mets.Six.Pos)
        $("#m1rbi6").text("RBI: " + data.Mets.Six.RBI)
        $("#m1home6").text("Home Runs: " + data.Mets.Six.Home)

        $("#m1name7").text("Name: " + data.Mets.Seven.Name)
        $("#m1num7").text("Jersey Number: " + data.Mets.Seven.Number)
        $("#m1pos7").text("Position: " + data.Mets.Seven.Pos)
        $("#m1rbi7").text("RBI: " + data.Mets.Seven.RBI)
        $("#m1home7").text("Home Runs: " + data.Mets.Seven.Home)

        $("#m1name8").text("Name: " + data.Mets.Eight.Name)
        $("#m1num8").text("Jersey Number: " + data.Mets.Eight.Number)
        $("#m1pos8").text("Position: " + data.Mets.Eight.Pos)
        $("#m1rbi8").text("RBI: " + data.Mets.Eight.RBI)
        $("#m1home8").text("Home Runs: " + data.Mets.Eight.Home)

        $("#m2name1").text("Name: " + data.Mets17.One.Name)
        $("#m2num1").text("Jersey Number: " + data.Mets17.One.Number)
        $("#m2pos1").text("Position: " + data.Mets17.One.Pos)
        $("#m2rbi1").text("RBI: " + data.Mets17.One.RBI)
        $("#m2home1").text("Home Runs: " + data.Mets17.One.Home)

        $("#m2name2").text("Name: " + data.Mets17.Two.Name)
        $("#m2num2").text("Jersey Number: " + data.Mets17.Two.Number)
        $("#m2pos2").text("Position: " + data.Mets17.Two.Pos)
        $("#m2rbi2").text("RBI: " + data.Mets17.Two.RBI)
        $("#m2home2").text("Home Runs: " + data.Mets17.Two.Home)

        $("#m2name3").text("Name: " + data.Mets17.Three.Name)
        $("#m2num3").text("Jersey Number: " + data.Mets17.Three.Number)
        $("#m2pos3").text("Position: " + data.Mets17.Three.Pos)
        $("#m2rbi3").text("RBI: " + data.Mets17.Three.RBI)
        $("#m2home3").text("Home Runs: " + data.Mets17.Three.Home)

        $("#m2name4").text("Name: " + data.Mets17.Four.Name)
        $("#m2num4").text("Jersey Number: " + data.Mets17.Four.Number)
        $("#m2pos4").text("Position: " + data.Mets17.Four.Pos)
        $("#m2rbi4").text("RBI: " + data.Mets17.Four.RBI)
        $("#m2home4").text("Home Runs: " + data.Mets17.Four.Home)

        $("#m2name5").text("Name: " + data.Mets17.Five.Name)
        $("#m2num5").text("Jersey Number: " + data.Mets17.Five.Number)
        $("#m2pos5").text("Position: " + data.Mets17.Five.Pos)
        $("#m2rbi5").text("RBI: " + data.Mets17.Five.RBI)
        $("#m2home5").text("Home Runs: " + data.Mets17.Five.Home)

        $("#m2name6").text("Name: " + data.Mets17.Six.Name)
        $("#m2num6").text("Jersey Number: " + data.Mets17.Six.Number)
        $("#m2pos6").text("Position: " + data.Mets17.Six.Pos)
        $("#m2rbi6").text("RBI: " + data.Mets17.Six.RBI)
        $("#m2home6").text("Home Runs: " + data.Mets17.Six.Home)

        $("#m2name7").text("Name: " + data.Mets17.Seven.Name)
        $("#m2num7").text("Jersey Number: " + data.Mets17.Seven.Number)
        $("#m2pos7").text("Position: " + data.Mets17.Eight.Pos)
        $("#m2rbi7").text("RBI: " + data.Mets17.Seven.RBI)
        $("#m2home7").text("Home Runs: " + data.Mets17.Seven.Home)

        $("#m2name8").text("Name: " + data.Mets17.Eight.Name)
        $("#m2num8").text("Jersey Number: " + data.Mets17.Eight.Number)
        $("#m2pos8").text("Position: " + data.Mets17.Eight.Pos)
        $("#m2rbi8").text("RBI: " + data.Mets17.Eight.RBI)
        $("#m2home8").text("Home Runs: " + data.Mets17.Eight.Home)

        $("#g1name1").text("Name: " + data.Giants.One.Name)
        $("#g1num1").text("Jersey Number: " + data.Giants.One.Number)
        $("#g1pos1").text("Position: " + data.Giants.One.Pos)
        $("#g1rbi1").text("RBI: " + data.Giants.One.RBI)
        $("#g1home1").text("Home Runs: " + data.Giants.One.Home)

        $("#g1name2").text("Name: " + data.Giants.Two.Name)
        $("#g1num2").text("Jersey Number: " + data.Giants.Two.Number)
        $("#g1pos2").text("Position: " + data.Giants.Two.Pos)
        $("#g1rbi2").text("RBI: " + data.Giants.Two.RBI)
        $("#g1home2").text("Home Runs: " + data.Giants.Two.Home)

        $("#g1name3").text("Name: " + data.Giants.Three.Name)
        $("#g1num3").text("Jersey Number: " + data.Giants.Three.Number)
        $("#g1pos3").text("Position: " + data.Giants.Three.Pos)
        $("#g1rbi3").text("RBI: " + data.Giants.Three.RBI)
        $("#g1home3").text("Home Runs: " + data.Giants.Three.Home)

        $("#g1name4").text("Name: " + data.Giants.Four.Name)
        $("#g1num4").text("Jersey Number: " + data.Giants.Four.Number)
        $("#g1pos4").text("Position: " + data.Giants.Four.Pos)
        $("#g1rbi4").text("RBI: " + data.Giants.Four.RBI)
        $("#g1home4").text("Home Runs: " + data.Giants.Four.Home)

        $("#g1name5").text("Name: " + data.Giants.Five.Name)
        $("#g1num5").text("Jersey Number: " + data.Giants.Five.Number)
        $("#g1pos5").text("Position: " + data.Giants.Five.Pos)
        $("#g1rbi5").text("RBI: " + data.Giants.Five.RBI)
        $("#g1home5").text("Home Runs: " + data.Giants.Five.Home)

        $("#g1name6").text("Name: " + data.Giants.Six.Name)
        $("#g1num6").text("Jersey Number: " + data.Giants.Six.Number)
        $("#g1pos6").text("Position: " + data.Giants.Six.Pos)
        $("#g1rbi6").text("RBI: " + data.Giants.Six.RBI)
        $("#g1home6").text("Home Runs: " + data.Giants.Six.Home)

        $("#g1name7").text("Name: " + data.Giants.Seven.Name)
        $("#g1num7").text("Jersey Number: " + data.Giants.Seven.Number)
        $("#g1pos7").text("Position: " + data.Giants.Seven.Pos)
        $("#g1rbi7").text("RBI: " + data.Giants.Seven.RBI)
        $("#g1home7").text("Home Runs: " + data.Giants.Seven.Home)

        $("#g1name8").text("Name: " + data.Giants.Eight.Name)
        $("#g1num8").text("Jersey Number: " + data.Giants.Eight.Number)
        $("#g1pos8").text("Position: " + data.Giants.Eight.Pos)
        $("#g1rbi8").text("RBI: " + data.Giants.Eight.RBI)
        $("#g1home8").text("Home Runs: " + data.Giants.Eight.Home)





    })
    .fail(function (jqxhr, status, error) {
        console.log('error', status, error)
    });

$(function () {
    $("#insert").load("header.html");
    $("#inserth").load("footer.html");
});