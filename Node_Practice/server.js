const express = require('express')
const app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app.get('/', function(req, res){
//     res.send('Hello World');
// })

require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});