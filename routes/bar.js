const express = require("express")
const router = express.Router()
const knex = require("../db/connection")


//Get all route
router.get("/", (req, res, next) => {
    knex("bar")
      .orderBy("id", "asc")
      .then(bars => {
        res.json({ bars })
      })
   })

//Get one route
router.get('/:id', (req,res,next) =>{
    const id = req.params.id
    knex('bar')
    .where('id',id)
    .then((bar) =>{
      if(!bar.length){
        next()
      }
      else{
      res.json({bar: bar[0]})
      }
    })
  })

//Post
router.post("/", (req, res, next) => {
  const body = req.body
 
  knex("bar")
    .insert(body)
    .returning("*")
    .then(bar => {
      res.json({ bar: bar[0] })
    })
 })

module.exports = router


