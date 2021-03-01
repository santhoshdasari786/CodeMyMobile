var express = require("express");
var router = express.Router();
var {user_list,getFriendsList,getFriendsofFriendsList} = require('./controllers/user.js');


router.get("/getUsers",user_list);

router.get("/getFriendsList",getFriendsList);

router.get("/getFriendsofFriendsList",getFriendsofFriendsList);

module.exports = router;