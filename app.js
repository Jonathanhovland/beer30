const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require('morgan')
const cors = require("cors")
const port = process.env.PORT || 3000

const barRoutes = require("./routes/bar")
const memberRoutes = require("./routes/member")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors())

app.get("/", (req, res) => res.json({
    "bars": "http://localhost:3000/bars",
}));

app.use("/bars", barRoutes)
app.use("/members", memberRoutes)

app.use(notFound)

app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port, () => console.log("server is running on port 3000"))
