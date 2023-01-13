import "dotenv/config"
import app from "./app.js";
const port = process.env.PORT


app.get("/", (req, res) =>{
    res.send("Pizza delivery service")
})

app.listen(port, () =>{
    console.log(`app is running at ${port}`)
})
