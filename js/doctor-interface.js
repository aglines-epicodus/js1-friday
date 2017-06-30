var Doctor = require('./../js/doctor.js').getDoctorModule;

var displayDoctor = function(malady, doctorData) {
  $('.showDoctor').text("Your suggested doctor is " + doctorData + ".");
}

$(document).ready(function(){
  var newDoctorObject = new Doctor();
    // var city = $('#location').val();
    $("#formOne").submit(function(){
      var medicalIssue = $("input#choice1").val();
    // $('#location').val("");
    // currentWeatherObject.getWeather(city, displayHumidity);
    newDoctorObject.getDoctor(medicalIssue);
  });
});
