import path from "path"
import cors from "cors"
import fs from "fs"
import express from "express"
import dotenv from "dotenv"
const __dirname = path.resolve()

dotenv.config()
const app = express()
app.use(express.urlencoded({extended: true, limit: "1gb", parameterLimit: 50000}))
app.use(express.json({limit: "1gb"}))
app.use(cors({credentials: true, origin: true}))
app.disable("x-powered-by")
app.set("trust proxy", true)

app.use(express.static(path.join(__dirname, "./dist/client"), {index: false}))
app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/models", express.static(path.join(__dirname, "./models")))

app.get("/*", function(req, res, next) {
    const document = fs.readFileSync(path.join(__dirname, "./dist/client/index.html"), {encoding: "utf-8"})
    res.status(200).send(document)
})

const run = async () => {
  let port = process.env.PORT || 8090
  app.listen(port, () => console.log(`Started the webserver at http://localhost:${port}`))
}

run()