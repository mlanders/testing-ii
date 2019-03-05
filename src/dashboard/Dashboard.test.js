import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from '../display/Display';
import App from '../App';

describe('<Dashboard />', () => {
	it('renders without crashing', () => {
		render(<Dashboard />);
	});

	afterEach(cleanup);
	it('triggers a strike', () => {
		render(<App />);
		const { getByTestId } = render(<Dashboard />);
		const { rerender } = render(<Display />);

		const strikeButton = getByTestId('strikeBtn');

		fireEvent.click(strikeButton);
		console.log(getByTestId('strikes').textContent);

		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[1]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		console.log(getByTestId('strikes').textContent);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[2]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		console.log(getByTestId('strikes').textContent);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[0]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		console.log(getByTestId('strikes').textContent);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[1]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		console.log(getByTestId('strikes').textContent);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[2]/i);
	});
});
