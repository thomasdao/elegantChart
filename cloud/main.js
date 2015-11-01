require('cloud/app.js');
var validator = require('cloud/libs/validator.min.js');


Parse.Cloud.beforeSave("Subscriber", function(request, response) {
  var email = request.object.get("email");
  var name = request.object.get("name");
  if (name && name.indexOf("http") != -1) {
  	response.error("Invalid name");
  }
  
  if (email && validator.isEmail(email)) {
    response.success();
  } else {
    response.error("Invalid Email");
  }
});
