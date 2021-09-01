import React from 'react';
import './Popup.css';
const Popup = ({ setPopupTriger, trigger, popupInfo, children }) => {
	const closePopup = () => {
		setPopupTriger(false);
	};
	return trigger ? (
		<div className="popup">
			<div className="popup-inner">
				<button className="close-button" onClick={closePopup}>
					X
				</button>
				{children}
			</div>
		</div>
	) : (
		''
	);
};

export default Popup;
