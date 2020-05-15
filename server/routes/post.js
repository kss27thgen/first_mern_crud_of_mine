const express = require("express");
const router = express.Router();
const Post = require("../model/post");

// @route GET api/posts
// @desc Get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find().sort({ createdAt: -1 });
		res.json(posts);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

// @route GET api/posts/:postId
// @desc Get single post
router.get("/:postId", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.postId });
		res.json(post);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

// @route POST api/posts
// @desc Create post
router.post("/", async (req, res) => {
	try {
		const { title, content, user } = req.body;
		Post.create({ title, content, user }, (err, post) => {
			if (err) {
				console.log(err);
				res.status(400).json({ error: err.message });
			}
			res.json(post);
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

// @route PUT api/posts/:postId
// @desc Update single post
router.put("/:postId", async (req, res) => {
	try {
		const { title, content, user } = req.body;
		const post = await Post.findOneAndUpdate(
			{ _id: req.params.postId },
			{ title, content, user },
			{ new: true },
		);
		res.json(post);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

// @route DELETE api/posts/:postId
// @desc Delete single post
router.delete("/:postId", async (req, res) => {
	try {
		const post = await Post.findOneAndDelete({ _id: req.params.postId });
		res.json({ message: "Post Deleted" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
