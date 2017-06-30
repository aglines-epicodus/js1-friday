var Doctor = require('./../js/doctor.js').getDoctorModule;

$(document).ready(function(){
  var newDoctorObject = new Doctor();
    $("form#formOne").submit(function(){
      var medicalIssue = $("#choice1").val();
      event.preventDefault();
      console.log("medicalIssue is " + medicalIssue);
    // medicalIssue = 'acne';
    newDoctorObject.getDoctor(medicalIssue);
  });
});
