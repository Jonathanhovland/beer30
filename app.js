const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const app         = module.exports = express()
const port        = parseInt(process.env.PORT || 3007)

const barRoutes = require("./routes/bar")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true})) // <= Disable if you don't need CORS

app.get("/", (req, res) => res.json({
    "bar": "http://localhost:3007/bar",
}));

app.use("/bar", barRoutes)

app.use(notFound)
app.use(errorHandler)



function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port, () => console.log("server is running on port 3007"))
