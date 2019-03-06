import React from 'react';

function Dashboard(props) {
	return (
		<>
			<h3>Dashboard</h3>
			<div>
				<button data-testid="strikeBtn" onClick={props.strike}>
					Strike
				</button>
				<button data-testid="ballsBtn" onClick={props.balls}>
					Ball
				</button>
				<button data-testid="foulBtn" onClick={props.foul}>
					Foul
				</button>
				<button data-testid="hitBtn" onClick={props.hit}>
					Hit
				</button>
			</div>
		</>
	);
}

export default Dashboard;
