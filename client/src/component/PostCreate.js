import React, { useState } from "react";
import axios from "axios";

const PostCreate = (props) => {
	const [formData, setFormData] = useState({
		user: "",
		title: "",
		content: "",
	});
	const [errors, setErrors] = useState([]);

	const { user, title, content } = formData;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/posts", formData);
			console.log(res);
			props.history.push("/");
		} catch (err) {
			console.log(err.response.data.error);
			setErrors([...errors, err.response.data.error]);
		}
	};

	return (
		<div className="container">
			<h2 className="mb-2 page-title">Form</h2>
			{errors.length > 0 &&
				errors.map((error, i) => (
					<p className="text-error mb-1" key={i}>
						{error}
					</p>
				))}
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

export default PostCreate;
