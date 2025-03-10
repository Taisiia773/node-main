// Импорт не используется, нужно убрать
import express, {  Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import postRouter from './PostApp/postRouter'
import userRouter from "./UserApp/userRouter";
import commentRouter from './CommentApp/commentRouter';
import cors from "cors"
import postRouterApi from "./PostApp/postRouterApi";
import commentRouterApi from "./CommentApp/commentRouterApi";
import userApiRouter from "./UserApp/userRouterApi";



const HOST = 'localhost'
const PORT = 7000

const app = express()

app.use(cors({
  origin : ["http://localhost:3000"]
}))

app.use(express.json())
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.use("/", postRouter);

app.get("/", (req: Request, res: Response) => {
    res.render('main')
})

app.use("/", userRouter)
app.use('/', commentRouter)
app.use("/api/post/", postRouterApi)
app.use("/api/comment/", commentRouterApi)
app.use("/api/profile/", userApiRouter)

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
})