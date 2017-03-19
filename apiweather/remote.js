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
                    $('#weathertype').text(data.current_observation.weather);


                    //                add1-3

                    $("#speed").text(data.current_observation.wind_mph + " mph");
                    $("#visibility").text(data.current_observation.visibility_mi + "mi");
                    $('#precip').text(data.current_observation.precip_today_in + String.fromCharCode(176) + "F")


                    $("#cover").fadeOut(250);
                    $("#cove").fadeOut(250);
                    $("#cov").fadeOut(250);



                }


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