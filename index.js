const express = require("express")
const mongo = require("mongoose")

const app = express()

const PORT = 3000;

app.use(express.json())
app.use(require('./routes/coffe.route'))

mongo.connect("mongodb+srv://admin06:admin06@cluster0.zvgtk.mongodb.net/drinks",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true
}
).then(() => console.log("Данные сервера успешно получены"))
.catch(() => console.log("Ошибка сервера!"))

app.listen(PORT, () => {
    console.log("Сервер запущен!")
})




