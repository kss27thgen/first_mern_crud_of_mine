import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import PostItem from "./PostItem";

const PostList = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		const posts = await axios.get("/posts");
		setPosts(posts.data);
		setLoading(false);
	};

	return loading ? (
		<Loader />
	) : (
		<div className="container">
			<h2 className="mb-2 page-title">post list</h2>
			{posts.map((post) => (
				<PostItem key={post._id} post={post} fetchPosts={fetchPosts} />
			))}
		</div>
	);
};

export default PostList;
