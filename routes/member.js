const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all members route
router.get("/", (req, res, next) => {
    knex("member")
        .orderBy("id", "asc")
        .then(members => {
            res.json({ members })
        })
})

//Get a member route
router.get("/:id", (req, res, next) => {
    const id = req.params.id
    
    knex("member")
        .where("id", id)
        .then((member) =>{
            res.json({ member: member[0] })
        })
})

//Edit an existing member route
router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    
    knex("member")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedMember => {
        res.json({ bar: updatedMember[0] })
      })
    })

//Delete a member route
router.delete("/:id", (req, res, next) => {
    const id = req.params.id

    knex("member")
        .where("id", id)
        .delete()
        .returning("*")
        .then(updatedMembers => {
            res.json({ member: updatedMembers[0] })
        })
})

//Get Friendship List
router.get("/:id/friendship", async (req, res, next) => {
    // Capture current member's id from request
    const memberId = req.params.id

    // Get current member as object from db
    let member = await knex("member")
                            .where("id", memberId)
                            .first()

    // Get array of current member's friends as objects with their ids as "friendId" (using the join table)
    const friendIds = await knex("friendship")
                                .select("friend_2_id as friendId")
                                .where("friend_1_id", memberId)
                                .andWhere('pending_friendship', false)                          
    
    // Create array of full friend objects using the array of their ids
    const friends = await Promise.all(friendIds.map(friend => knex("member")
                                                                .where("id", friend.friendId)
                                                                .then(member => member[0])
                                                    )
                                    )

    // Attach list of friends to member object
    member.friends = friends

    // Return complete record of member with array of their friends
    res.json({ member })
})

module.exports = router