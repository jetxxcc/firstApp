import {connect} from "mongoose";
import {MONGODB_URL} from './config/config.js'

(async ()=>{
try {
    const db = await connect(MONGODB_URL)
    console.log('DB conected  to', db.connection.name);
} catch (error) {
    console.log(error)
}
})()