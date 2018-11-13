// Require express
let express = require(`express`);

// Create instnace of application
let application = express();

// Create an address 
let PORT = 5000;

// Give application static files
application.use(express.static(`server/public`));

application.listen(PORT, function(){
    // Server is running
    console.log(`Listening on port ${PORT}`);
})