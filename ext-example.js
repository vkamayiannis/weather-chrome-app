$(document).ready(function () {
  $("#button-click").click(function () {
    var API_KEY = "fd2ddec4065c1c4005076c1f2e35ee6a";
    var city = "Thessaloniki";
    var country_code = "GR";
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=";
    var exec_url = url + city + "," + country_code + "&appid=" + API_KEY;
    $("#json").html(exec_url);
    $.getJSON(exec_url)
      .done(function (json) {
        $("#json").html(JSON.stringify(json));
        console.log(json);
      }).fail(function (jqxhr, textStatus, error) {
        $("#json").html(error);
      });
  });
});