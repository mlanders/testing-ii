import React from 'react';

function Dashboard(props) {
	return (
		<>
			<h3>Dashboard</h3>
			<div>
				<button data-testid="strikeBtn" onClick={props.strike}>
					Strike
				</button>
				<button>Ball</button>
				<button>Foul</button>
				<button>Hit</button>
			</div>
		</>
	);
}

export default Dashboard;
