import React, { useContext } from 'react';
import { FruitDataContext } from '../store/FruitContext';
import Card from './Card';
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
	console.log(pics);
	return (
		<React.Fragment>
			{isLoading_fruits || isLoading_pics ? (
				<div>is loading</div>
			) : (
				<div className="container">
					{fruits.map((item) => {
						return (
							<Card
								name={item.name}
								picture={
									pics[item.name.toLowerCase()]
										? `${
												process.env.PUBLIC_URL +
												'/' +
												item.name.toLowerCase()
										  }.png`
										: `./default-fruit.jpg`
								}
								nutrition={item.nutrition}
							></Card>
						);
					})}
					{/* {Object.keys(pics).map((key) => {
						return <div>{key}</div>;
					})} */}
				</div>
			)}
		</React.Fragment>
	);
};

export default Home;
