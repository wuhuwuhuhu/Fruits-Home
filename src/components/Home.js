import React, { useContext, useState } from 'react';
import Popup from './Popup';
import { FruitDataContext } from '../store/FruitContext';
import Card from './Card';
import Information from './Information';
import './Home.css';
const Home = () => {
	const {
		fruits,
		error_fruits,
		pics,
		error_pics,
		isLoading_fruits,
		isLoading_pics,
	} = useContext(FruitDataContext);
	const [popupTriger, setPopupTriger] = useState(false);
	const [popupInfo, setPopupInfo] = useState({});
	return (
		<React.Fragment>
			{isLoading_fruits || isLoading_pics ? (
				<div>is loading</div>
			) : (
				<div className="container">
					{fruits.map((item) => {
						return (
							<Card
								key={item.id}
								setPopupTriger={setPopupTriger}
								setPopupInfo={setPopupInfo}
								info={item}
								picture={
									pics[item.name.toLowerCase()]
										? `${
												process.env.PUBLIC_URL +
												'/' +
												item.name.toLowerCase()
										  }.png`
										: `./default-fruit.jpg`
								}
							></Card>
						);
					})}
					{/* {Object.keys(pics).map((key) => {
						return <div>{key}</div>;
					})} */}
					<Popup
						trigger={popupTriger}
						setPopupTriger={setPopupTriger}
						popupInfo={popupInfo}
					>
						<Information info={popupInfo}></Information>
					</Popup>
				</div>
			)}
		</React.Fragment>
	);
};

export default Home;
