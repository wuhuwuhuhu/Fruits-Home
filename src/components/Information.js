import React from 'react';
import './Information.css';
import NutritionFacts from './NutritionFacts';
const Information = ({ info }) => {
	return (
		<div className="info-container">
			<div className="info-left">
				<h1>{info.name}</h1>
				<br></br>
				<br></br>
				<img src={info.picture} alt={info.name} className="info-img" />
			</div>
			<div className="info-right">
				<div className="info-information">
					{info.genus && <p>GENUS: {info.genus}</p>}
					{info.family && <p>FAMILY: {info.family}</p>}
					{info.order && <p>ORDER: {info.order}</p>}
				</div>
				<div className="info-nutritions">
					<NutritionFacts
						nutritions={info.nutritions}
					></NutritionFacts>
				</div>
			</div>
		</div>
	);
};

export default Information;
