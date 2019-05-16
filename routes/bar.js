const express = require("express")
const router = express.Router()
const knex = require("../db/connection")


//Get all bars route
router.get("/", (req, res, next) => {
  knex("bar")
    .orderBy("id", "asc")
    .then(bars => {
      res.json({ bars })
    })
})

//Get one bar route
router.get('/:id', (req,res,next) =>{
  const id = req.params.id
  knex('bar')
  .where('id',id)
  .then((bar) =>{
    res.json({bar: bar[0]})
  })
})

//Post new bar route
router.post("/", (req, res, next) => {
  const body = req.body
 
  knex("bar")
    .insert(body)
    .returning("*")
    .then(bar => {
      res.json({ bar: bar[0] })
    })
 })

//Edit an existing route
router.put("/:id", (req, res) => {
  const id = req.params.id
  const body = req.body
  
  knex("bar")
    .where("id", id)
    .update(body)
    .returning("*")
    .then(updatedbar => {
      res.json({ bar: updatedbar[0] })
    })
  })

//Delete a bar route
router.delete("/:id", (req, res) => {
  const id = req.params.id

  knex("bar")
    .where("id", id)
    .delete()
    .returning("*")
    .then(deletedbar => {
      res.json({ bar: deletedbar[0] })
    })
})


module.exports = router


