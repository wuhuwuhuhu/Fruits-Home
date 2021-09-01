import React, { createContext, useReducer, useContext, useEffect } from 'react';

const initialContext = {
	fruits: [],
	error_fruits: '',
	pics: {},
	error_pics: '',
	isLoading_fruits: true,
	isLoading_pics: true,
};
export const FruitDataContext = createContext(initialContext);
const fruitDataReducer = (state, action) => {
	switch (action.type) {
		case 'GET_FRUIT':
			return {
				...state,
				...action.payload,
				isLoading_fruits: false,
			};
		case 'GET_PICS':
			return {
				...state,
				...action.payload,
				isLoading_pics: false,
			};
		default:
			return state;
	}
};

export const FruitDataProvider = ({ children }) => {
	const contextState = useContext(FruitDataContext);
	const [state, dispatch] = useReducer(fruitDataReducer, contextState);
	useEffect(() => {
		fetch('https://wuhd.site:64586/fruit/all')
			.then((response) => {
				if (response.ok) {
					return response;
				} else throw new Error('Error, Can not load fruits list.');
			})
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: 'GET_FRUIT',
					payload: {
						fruits: data,
						isLoading_fruits: false,
						error_fruits: null,
					},
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_FRUIT',
					payload: {
						fruits: [],
						isLoading_fruits: false,
						error_fruits: error.message,
					},
				});
			});
		//initialze pics obj

		fetch('https://wuhd.site:64586/picture_list')
			.then((response) => {
				if (response.ok) {
					return response;
				} else
					throw new Error('Error, Can not load pictures of fruit.');
			})
			.then((response) => response.json())
			.then((data) => {
				//use regex to get valid fruits name
				const namePattern = new RegExp('([a-z]*)(?=.png$)');
				const picsObj = {};
				for (let url of data) {
					const name = namePattern.exec(url)[0];
					if (name) picsObj[name] = url;
				}
				dispatch({
					type: 'GET_PICS',
					payload: {
						pics: picsObj,
						isLoading_pics: false,
						error_pics: null,
					},
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_PICS',
					payload: {
						pics: {},
						isLoading_pics: false,
						error_pics: error.message,
					},
				});
			});
	}, []);

	return (
		<FruitDataContext.Provider value={state}>
			{children}
		</FruitDataContext.Provider>
	);
};
