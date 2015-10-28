var validator = require('cloud/libs/validator.min.js');


Parse.Cloud.beforeSave("Subscriber", function(request, response) {
  var email = request.object.get("email");
  if (email && validator.isEmail(email)) {
    response.success();
  } else {
    response.error("Invalid Email");
  }
});
