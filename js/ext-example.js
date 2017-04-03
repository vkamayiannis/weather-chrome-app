$(document).ready(function () {
  //TODO : REMOVE BUTTON CLICK DECLARATION AND FINALLY LET EVERYTHING HAPPEN ON LOAD
  $("#button-click").click(function () {
    var startdate = getCurrentDate();
    var startdate_date = new Date();
    var city = "Thessaloniki";
    var country_code = "GR";
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
    var exec_url = url + city + "," + country_code + "&units=metric&cnt=5&appid=" + API_KEY;
    $.getJSON(exec_url)
      .done(function (json) {
        var obj = JSON.parse(JSON.stringify(json));
        var city = obj.city.name;
        var country_code = obj.city.country;
        $("#city-name").html(city + ', ' + country_code);
        obj.list.forEach(function (currentValue, index, arr) {
          var tmp = currentValue;
          var min = tmp.temp.min;
          var max = tmp.temp.max;
          var currentdate = new Date(startdate_date.getTime() + (index * 24 * 60 * 60 * 1000));
          var icon_class = "wi-owm-" + tmp.weather[0].id;
          var icon_number = "#icon-class-" + (index + 1).toString();
          var weather_descr = "#weather-descr-" + (index + 1).toString();
          var temp_id = "#temp-date-" + (index + 1).toString();
          var min_id = "#current-day-min-" + (index + 1).toString();
          var max_id = "#current-day-max-" + (index + 1).toString();
          $(temp_id).html(formatdate(currentdate));
          $(icon_number).addClass(icon_class);
          $(weather_descr).html(tmp.weather[0].description);
          $(min_id).html(min);
          $(max_id).html(max);
        });
      }).fail(function (jqxhr, textStatus, error) {
        $("#json").html(error);
      });
  });
});