let express = require(express);
let app = express();

require("./routes/api-routes.js")(app);