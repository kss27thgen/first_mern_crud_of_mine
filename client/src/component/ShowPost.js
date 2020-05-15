import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const ShowPost = (props) => {
	const [loading, setLoading] = useState(true);
	const [currentPost, setCurrentPost] = useState({});
	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		const res = await axios.get(`/posts/${props.match.params.postId}`);
		setCurrentPost(res.data);
		setLoading(false);
	};

	const handleDelete = async () => {
		await axios.delete(`/posts/${currentPost._id}`);
		props.history.push("/");
	};

	return loading ? (
		<Loader />
	) : (
		<div className="container">
			<Link to="/">
				<button className="button bg-gray button-large mb-2 ml-1">
					Back to List
				</button>
			</Link>
			<div className="post">
				<div className="post-main">
					<h5 className="post-title text-black">
						{currentPost.title}
					</h5>
					<p className="post-content">{currentPost.content}</p>
					<div className="post-info">
						<span className="post-author">
							by. {currentPost.user}
						</span>
						<span className="post-time">
							{new Date(currentPost.createdAt).toLocaleString()}
						</span>
					</div>
				</div>
				<div className="post-actions mt-2 ml-5 show-actions">
					<Link to={`/posts/${currentPost._id}/edit`}>
						<button className="button bg-green mb-1 button-wide">
							Edit
						</button>
					</Link>
					<button className="button bg-red" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShowPost;
