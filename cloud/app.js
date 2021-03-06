
// These two lines are required to initialize Express in Cloud Code.
 express = require('express');
 app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// Attach the Express app to Cloud Code.
app.use(function(req, res) {
  res.status(400);
  res.render('404');
});

app.listen();
