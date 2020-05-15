const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			min: 3,
			max: 150,
			required: true,
		},
		content: {
			type: {},
			required: true,
			min: 5,
			max: 2000,
		},
		user: {
			type: String,
			default: "Admin",
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Post", postSchema);
