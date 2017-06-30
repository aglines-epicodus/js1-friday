var Doctor = require('./../js/doctor.js').getDoctorModule;

// var displayDoctor = function(malady, doctorData) {
//   $('.showDoctor').text("Your suggested doctor is " + doctorData + ".");
// }

$(document).ready(function(){
  var newDoctorObject = new Doctor();
    // $("#formOne").submit(function(){
    //   var medicalIssue = $("input#choice1").val();
    medicalIssue = 'acne';
    newDoctorObject.getDoctor(medicalIssue);
  // });
});
