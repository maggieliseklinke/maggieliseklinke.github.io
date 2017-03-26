// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({

            url: "//api.wunderground.com/api/9de2f202a0cdd493/conditions/q/" + lat + "," + long + ".json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);

                $("#currentTemp").text(data.current_observation.temp_f + String.fromCharCode(176) + "F");
                //                cityDisplay
                $("#cityDisplay").text(data.current_observation.display_location.full);
                //                summary
                $('#summary').text(data.current_observation.weather);

                $("#hi").text(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + String.fromCharCode(176) + "f");
                $("#lo").text(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + String.fromCharCode(176) + "f");
                //                add1-3

                $("#add1").text("The wind is blowing at " + data.current_observation.wind_mph + " mph");
                $("#add2").text("The current visibility is " + data.current_observation.visibility_mi + "mi");
                $('#add3').text("The dewpoint is " + data.current_observation.dewpoint_f + String.fromCharCode(176) + "F")



                $("#cover").fadeOut(250);
            }
        });

    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});