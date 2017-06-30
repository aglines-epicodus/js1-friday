var apiKey = require('./../.env').apiKey;

function Doctor() {}

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    console.log(result);
    var firstName = result.data[0].profile.first_name;
    var lastName = result.data[0].profile.last_name;
    var fullName = firstName + " " + lastName;
    console.log("name = " + fullName);
    $('.showDoctor').text("The name of your recommended doctor is " + fullName + ".");
  })
  .fail(function(error){
    console.log("fail");
  });
};
exports.getDoctorModule = Doctor;




// Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, Dopey
// delusions of grandeur, bipolar, manic, narcolepsy, social anxiety, common cold, fever?

// curl "https://api.betterdoctor.com/2016-03-01/doctors?query='acne'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=96098a29a8a69869e94a335954688d76"
