import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostList from "./PostList";
import PostCreate from "./PostCreate";
import Header from "./Header";
import PostEdit from "./PostEdit";
import ShowPost from "./ShowPost";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="route-wrapper">
				<Switch>
					<Route exact path="/" component={PostList} />
					<Route exact path="/create" component={PostCreate} />
					<Route exact path="/posts/:postId" component={ShowPost} />
					<Route
						exact
						path="/posts/:postId/edit"
						component={PostEdit}
					/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
