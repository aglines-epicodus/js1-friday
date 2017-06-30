var Doctor = require('./../js/doctor.js').getDoctorModule;

$(document).ready(function(){
  var newDoctorObject = new Doctor();
    $("form#formOne").submit(function(){
      event.preventDefault();
      var medicalIssue = $("#choice").val();
      console.log("medicalIssue is " + medicalIssue);
    // medicalIssue = 'acne';
    newDoctorObject.getDoctor(medicalIssue);
  });
});
