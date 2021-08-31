import React, { useContext } from 'react';
import { FruitDataContext } from '../store/FruitContext';

const Home = () => {
	const {
		fruits,
		error_fruits,
		pics,
		error_pics,
		isLoading_fruits,
		isLoading_pics,
	} = useContext(FruitDataContext);

	return (
		<React.Fragment>
			{isLoading_fruits || isLoading_pics ? (
				<div>is loading</div>
			) : (
				<div>
					{fruits.map((item) => {
						return <div>{item.name}</div>;
					})}
					{Object.keys(pics).map((key) => {
						return <div>{key}</div>;
					})}
				</div>
			)}
		</React.Fragment>
	);
};

export default Home;
