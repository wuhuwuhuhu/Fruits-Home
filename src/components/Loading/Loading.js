import React from 'react';
import './Loading.css';
const Loading = () => {
	return (
		<div className="Loading">
			<img src={process.env.PUBLIC_URL + '/loading.gif'}></img>
			<h1>Loading</h1>
		</div>
	);
};

export default Loading;
