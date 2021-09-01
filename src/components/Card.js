'rafce';
import React from 'react';
import './Card.css';
const Card = ({ picture, name, nutrition }) => {
	return (
		<div className="card">
			<img src={picture} alt={name} className="card_img" />
			<div className="card_info">
				<button>{name}</button>
			</div>
		</div>
	);
};

export default Card;
