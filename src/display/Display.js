import React from 'react';

function Display(props) {
	return (
		<>
			<h3>Display</h3>
			<p data-testid="balls">Balls: {props.balls}</p>
			<p data-testid="strikes">Strikes: {props.strikes}</p>
		</>
	);
}

export default Display;
