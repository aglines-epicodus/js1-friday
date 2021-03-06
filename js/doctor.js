var apiKey = require('./../.env').apiKey;
var displayDoctor = require('./../js/doctor-interface.js').displayDoctorFunction;

function Doctor() {}

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
    displayDoctor(result);
})
  .fail(function(error){
    console.log("fail");
  });
};
exports.getDoctorModule = Doctor;
