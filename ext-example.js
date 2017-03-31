$(document).ready(function () {
  //TODO : REMOVE BUTTON CLICK DECLARATION AND FINALLY LET EVERYTHING HAPPEN ON LOAD
  $("#button-click").click(function () {
    var city = "Thessaloniki";
    var country_code = "GR";
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
    var exec_url = url + city + "," + country_code + "&units=metric&cnt=5&appid=" + API_KEY;
    $("#json").html(exec_url);
    $.getJSON(exec_url)
      .done(function (json) {
        var obj = JSON.parse(JSON.stringify(json));
        console.log(obj);
        var city = obj.city.name;
        var country_code = obj.city.country;
        obj.list.forEach(function (currentValue, index, arr) {
          var tmp = currentValue;
          var min = tmp.temp.min;
          var max = tmp.temp.max;
          // console.log(tmp);
          // console.log(min + " " + max);
        });
      }).fail(function (jqxhr, textStatus, error) {
        $("#json").html(error);
      });
  });
});