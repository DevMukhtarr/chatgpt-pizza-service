import express from "express";
import cors from "cors"
import connect from "./config/connect.js";
import authroutes from "./routes/authroute.js"
import mainroutes from "./routes/mainroute.js"
const app = express()


app.use(connect)
app.use(
    express.urlencoded({
      extended: false,
    })
  );
  
app.use(cors())
app.use(express.json());

app.use(authroutes)
app.use(mainroutes)
export default app