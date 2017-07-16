var Doctor = require('./../js/doctor.js').getDoctorModule;

var displayDoctor = function(result) {
  firstNames = [];
  lastNames = [];
  docPhone = [];
  $(".showDoctor").empty();
  $(".showDoctor").text("Here is a list of recommended doctors: ");
  for (i=0 ; i<20 ; i++) {
    if ( result.data[i] !== undefined ) {
      firstNames[i] = result.data[i].profile.first_name;
      lastNames[i] = result.data[i].profile.last_name;
      // console.log(result.data[i]);
      docPhone[i] = result.data[i].practices[0].phones[0].number;

      $(".showDoctor").append("<p>" + firstNames[i] + " " + lastNames[i] + "<br><a href='tel:" + docPhone[i] + "'>" + docPhone[i] + "</a></p>");
    }
  }
};

$(document).ready(function(){
  var newDoctorObject = new Doctor();
    $("form#formOne").submit(function(){
      event.preventDefault();
      var medicalIssue = $("#choice").val();
    newDoctorObject.getDoctor(medicalIssue);
  });
});

exports.displayDoctorFunction = displayDoctor;
