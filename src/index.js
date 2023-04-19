import app from "./app"
import './databse'
import {PORT} from "./config/config.js"

app.listen(PORT);
console.log("server on port", PORT);
