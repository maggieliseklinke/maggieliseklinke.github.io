// Get weather data from wunderground.com

// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    console.log('click occured');
    // With the text value get the needed value from the weather.json file
    var jsonCity = $(this).text(); // Franklin, etc...
    document.getElementById("searchResults").style.display = "none";
    console.log(jsonCity);
    $.ajax({
        url: "//api.wunderground.com/api/9de2f202a0cdd493/conditions/q/" + jsonCity + ".json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log(data[jsonCity]);


            $("#cover").fadeOut(250);
            $("#cove").fadeOut(250);
            $("#cov").fadeOut(250);
            $("#add1").text("The wind is blowing at " + data.current_observation.wind_mph + " mph");
            $("#add2").text("The current visibility is " + data.current_observation.visibility_mi + "mi");
            $('#add3').text("The dewpoint is " + data.current_observation.dewpoint_f + String.fromCharCode(176) + "F")
            $("#currentTemp").text(data.current_observation.temp_f + String.fromCharCode(176) + "F");
            //                cityDisplay
            $("#cityDisplay").text(data.current_observation.display_location.full);
            //                summary
            $('#summary').text(data.current_observation.weather);


        }
    });
    $.ajax({
        url: "//api.wunderground.com/api/9de2f202a0cdd493/forecast/q/" + jsonCity + ".json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $("#hi").text("HI: " + data.forecast.simpleforecast.forecastday[0].high.fahrenheit + String.fromCharCode(176) + "F");
            $("#lo").text("LO: " + data.forecast.simpleforecast.forecastday[0].low.fahrenheit + String.fromCharCode(176) + "F");
        }

    });
});




$('#query').keyup(function () {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data);

        // test for JSON received
        // Begin building output
        var output = '<ol>';
        $.each(data.RESULTS, function (key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
}); // end onkeyup




// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}