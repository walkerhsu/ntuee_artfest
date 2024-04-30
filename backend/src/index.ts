import express from "express"
import path from "path"

const app = express()
app.use(express.static(path.join(__dirname, "../..", "frontend", "build")))
app.get("*", (_: any, res: any) => {
  res.sendFile(path.join(__dirname, "../..", "frontend", "build", "index.html"))
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})