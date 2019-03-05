import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Display from './display/Display';

class App extends Component {
	state = {
		strikes: 0,
		balls: 0,
	};

	strike = () => {
		if (this.state.strikes <= 1) {
			this.setState({ strikes: this.state.strikes + 1 });
		} else {
			this.setState({ strikes: 0, balls: 0 });
		}
	};
	render() {
		return (
			<div className="App">
				<h1>At-Bat</h1>
				<Dashboard strike={this.strike} />
				<Display balls={this.state.balls} strikes={this.state.strikes} />
			</div>
		);
	}
}

export default App;
