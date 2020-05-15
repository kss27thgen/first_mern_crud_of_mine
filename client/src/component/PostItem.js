import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostItem = ({ post, fetchPosts }) => {
	const renderContent = (content) => {
		return content.length > 40 ? content.substring(0, 40) + "..." : content;
	};

	const handleDelete = async () => {
		await axios.delete(`/posts/${post._id}`);
		fetchPosts();
	};

	return (
		<div className="post">
			<div className="post-main">
				<Link to={`/posts/${post._id}`}>
					<h5 className="post-title text-blue">{post.title}</h5>
				</Link>
				<p className="post-content">{renderContent(post.content)}</p>
				<div className="post-info">
					<span className="post-author">by. {post.user}</span>
					<span className="post-time">
						{new Date(post.createdAt).toLocaleString()}
					</span>
				</div>
			</div>
			<div className="post-actions ml-1">
				<Link to={`/posts/${post._id}/edit`}>
					<button className="button bg-green mb-1 button-wide">
						Edit
					</button>
				</Link>
				<button className="button bg-red" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default PostItem;
