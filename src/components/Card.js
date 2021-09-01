'rafce';
import React from 'react';
import './Card.css';
const Card = ({ setPopupTriger, setPopupInfo, info, picture }) => {
	const clickHandler = () => {
		setPopupInfo({
			...info,
			picture,
		});
		setPopupTriger(true);
	};
	const name = info.name;
	return (
		<div className="card" onClick={clickHandler}>
			<img src={picture} alt={name} className="card_img" />
			<div className="card_info">
				<button>{name}</button>
			</div>
		</div>
	);
};

export default Card;
