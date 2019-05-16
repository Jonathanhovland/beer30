const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

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