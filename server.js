const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./routes/users")
const Port = process.env.PORT
mongoose.connect(env.process.MONGODB_URI)
mongoose.connection.on("conected", () => {
  console.log("DB Connected Successfully!")
})

app.use(express.json())
app.use("/users", userRouter)

app.listen(Port, () => {
  console.log(`App. Working With Port ${Port}`)
})
