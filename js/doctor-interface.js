var Doctor = require('./../js/doctor.js').getDoctorModule;

$(document).ready(function(){
  var currentDoctorObject = new Doctor();

// MAYBE THIS??
  currentDoctorObject.getDoctor(userCondition);
}
