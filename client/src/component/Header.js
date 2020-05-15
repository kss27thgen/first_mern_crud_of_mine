import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link className="header-logo" to="/">
				LOGO
			</Link>
			<Link className="header-link" to="/">
				Home
			</Link>
			<Link className="header-link" to="/create">
				Create
			</Link>
		</header>
	);
};

export default Header;
