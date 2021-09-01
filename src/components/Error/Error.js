import React from 'react';
import './Error.css';
const Error = ({ error_fruits, error_pics }) => {
	return (
		<div className="Error">
			<h1>Sorry, something went wrong!</h1>
			<br></br>
			<h2>{error_fruits}</h2>
			<br></br>
			<h2>{error_pics}</h2>
		</div>
	);
};

export default Error;
