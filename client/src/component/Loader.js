import React from "react";
import loader from "../images/Tripple-Ring-Preloader.gif";

const Loader = () => {
	return (
		<div>
			<img src={loader} className="loader" alt="loader" />
		</div>
	);
};

export default Loader;
