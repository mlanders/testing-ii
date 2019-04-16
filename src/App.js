import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Display from './display/Display';

class App extends Component {
	state = {
		strikes: 0,
		balls: 0,
	};

	// strike function
	strike = () => {
		if (this.state.strikes <= 1) {
			this.setState({ strikes: this.state.strikes + 1 });
		} else {
			this.setState({ strikes: 0, balls: 0 });
		}
	};

	// ball function
	balls = () => {
		if (this.state.balls <= 2) {
			this.setState({ balls: this.state.balls + 1 });
		} else {
			this.setState({ strikes: 0, balls: 0 });
		}
	};

	// foul function
	foul = () => {
		if (this.state.strikes <= 1) {
			this.setState({ strikes: this.state.strikes + 1 });
		} else {
			return;
		}
	};

	// hit function
	hit = () => {
		this.setState({
			strikes: 0,
			balls: 0,
		});
	};
	render() {
		return (
			<div className="App">
				<h1>At-Bat</h1>
				<Dashboard
					strike={this.strike}
					balls={this.balls}
					foul={this.foul}
					hit={this.hit}
				/>
				<Display balls={this.state.balls} strikes={this.state.strikes} />
			</div>
		);
	}
}

export default App;
