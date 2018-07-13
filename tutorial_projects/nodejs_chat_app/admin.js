
/*
  ===============================================
  AdminModule
	- This module routes & handles requests admin requests
  ===============================================
*/

// modules
var express = require("express");
var uuid = require("node-uuid");
var _ = require("lodash");

	// database module
var rooms = require("./data/rooms.json");

var router = express.Router();
module.exports = router;	// export the router function


router.get('/rooms', function (req, res) {
	res.render("rooms.jade", {
		title: "Chat Room",
		rooms: rooms,
		baseUrl: req.baseUrl
	});
});

router.get("/rooms/add", function (req, res) {
	res.render("add.jade", { title: "Create new Chat Room"});
	});
router.post("/rooms/add", function (req, res) {
	var room = {
		name: req.body.name,
		id: uuid.v4()
	};
	rooms.push(room);
	res.redirect(req.baseUrl + "/rooms");
});

router.route('/rooms/edit/:id')
.all(function(req, res, next) {
	var roomId = req.params.id;
	var room = _.find(rooms, r => r.id === roomId);

	if(!room) {
		res.sendStatus(404);
		return;
	}
	res.locals.room = room;		// res.locals is available to the view/template rendered in res.render() so you don't have to pass in that variable
															// cos it's already there
	next();
})
.get(function(req, res) {
	res.render("edit.jade", {
		title: "Edit"
		// res.locals is available in res.render() & it has our room variable defined
	});
})
.post(function(req, res) {
	res.locals.room.name = req.body.name;
	res.redirect(req.baseUrl + "/rooms");
});

router.get('/rooms/delete/:id', function(req, res) {
	var roomId = req.params.id;
	rooms = rooms.filter(r => r.id !== roomId);
	res.redirect(req.baseUrl + "/rooms");
});
