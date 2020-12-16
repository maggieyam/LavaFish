//create a comment
const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const Comment = require("../../models/Comment");
const Post = require("../../models/Post");

router.post("/create", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        let comment = new Comment({
            body: req.body.body,
            user: req.user.id,
        });
        comment.save().then(comment => {
            Post.findById(req.body.postId)
            .then( post => {
                post.comments.push(comment.id);
                post.save().then(res.json(comment))
            })
        }) 
    }
    // Post.findById(req.body.id).then({
    //     post.comments.push()
    // })
)

module.exports = router;