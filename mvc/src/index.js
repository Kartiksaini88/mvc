let express = require("express")

let app = express()

let connect = require("./configs/db")

let {register,login} = require("./controllers/auth")

let userController = require("./controllers/user")
let bookController = require("./controllers/book")
let  commentCrontoller= require("./controllers/comment")

app.use(express.json())
app.post("/login",login)
app.use("/book",bookController)
app.use("/comment",commentCrontoller)
app.post("/register",register)

app.use("/user",userController)

app.listen(2000,async()=>{
    try {
        await connect()
        console.log("this is port 2000")
    } catch (error) {
        console.log(error)
    }
})