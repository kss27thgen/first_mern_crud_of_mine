import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const PostEdit = (props) => {
	const [formData, setFormData] = useState({
		user: "",
		title: "",
		content: "",
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		const res = await axios.get(`/posts/${props.match.params.postId}`);
		setFormData(res.data);
		setLoading(false);
	};

	const { user, title, content } = formData;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.put(
			`/posts/${props.match.params.postId}`,
			formData,
		);
		console.log(res);
		props.history.push("/");
	};

	return loading ? (
		<Loader />
	) : (
		<div className="container">
			<Link to="/">
				<button className="button bg-gray button-large mb-2">
					Back to List
				</button>
			</Link>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group mb-1">
					<input
						className="input"
						type="text"
						placeholder="Your name"
						name="user"
						value={user}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-1">
					<input
						className="input"
						type="text"
						placeholder="Title"
						name="title"
						value={title}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-1">
					<textarea
						className="textarea"
						rows="4"
						placeholder="content"
						name="content"
						value={content}
						onChange={handleChange}
					/>
				</div>
				<div className="button-group">
					<button className="button bg-green button-large m-auto">
						Sbumit
					</button>
				</div>
			</form>
		</div>
	);
};

export default PostEdit;

// 5ebc737ce29aa065a2dfcc81
