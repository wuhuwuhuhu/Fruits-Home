import React from 'react';
import './NutritionFacts.css';
const NutritionFacts = ({ nutritions }) => {
	return (
		<div className="nutrition-facts">
			<div className="nutrition-facts-title">
				<h1>Nutrition Facts</h1>
			</div>
			<table className="nutrition-facts-table">
				<tbody>
					{Object.keys(nutritions).map((key) => {
						return (
							<tr key={key}>
								<th colSpan="2">
									<b>{key}</b>
								</th>
								<td>
									<b>{nutritions[key]}</b>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default NutritionFacts;
