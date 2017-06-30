var apiKey = require('./../.env').apiKey;

function Doctor() {}

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
    console.log(result);
// TEST = STORE IN ARRAY
  firstNames = [];
  lastNames = [];
  $(".showDoctor").empty();
  $(".showDoctor").text("Here is a list of recommended doctors: ");
  for (i=0 ; i<20 ; i++) {
    if ( result.data[i] !== undefined ) {
      firstNames[i] = result.data[i].profile.first_name;
      lastNames[i] = result.data[i].profile.last_name;
      console.log(firstNames[i], lastNames[i]);

      $(".showDoctor").append("<p>" + firstNames[i] + " " + lastNames[i] + "</p>");
    }
  };

// TESTING FOREACH
    // $.each(result.data[0].profile, function(index, value) {
    //   console.log(index + " : " + value); });
    // $.each([11, 22], function( index, value) {
    //     console.log(index + " : " + value); });

// WORKING CODE:
    // var firstName = result.data[0].profile.first_name;
    // var lastName = result.data[0].profile.last_name;
    // var fullName = firstName + " " + lastName;
    // $(".showDoctor").text("The name of your recommended doctor is " + fullName + ".");

  })
  .fail(function(error){
    console.log("fail");
  });
};
exports.getDoctorModule = Doctor;

// Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, Dopey
// delusions of grandeur, bipolar, manic, narcolepsy, social anxiety, common cold, fever?
