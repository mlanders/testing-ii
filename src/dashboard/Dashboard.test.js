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

		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[1]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[2]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[0]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[1]/i);

		rerender(<Display />);
		fireEvent.click(strikeButton);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[2]/i);
	});
	it('triggers a ball', () => {
		render(<App />);
		const { getByTestId } = render(<Dashboard />);
		const { rerender } = render(<Display />);

		const ballsButton = getByTestId('ballsBtn');

		fireEvent.click(ballsButton);

		expect(getByTestId('balls').textContent).toMatch(/balls:\s[1]/i);

		rerender(<Display />);
		fireEvent.click(ballsButton);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[2]/i);

		rerender(<Display />);
		fireEvent.click(ballsButton);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[3]/i);

		rerender(<Display />);
		fireEvent.click(ballsButton);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0]/i);

		rerender(<Display />);
		fireEvent.click(ballsButton);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[1]/i);
	});
	it('triggers a foul', () => {
		render(<App />);
		const { getByTestId } = render(<Dashboard />);
		const { rerender } = render(<Display />);

		const foulButton = getByTestId('foulBtn');

		fireEvent.click(foulButton);

		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0]/i);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[1]/i);

		rerender(<Display />);
		fireEvent.click(foulButton);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0]/i);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[2]/i);

		rerender(<Display />);
		fireEvent.click(foulButton);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0]/i);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[2]/i);
	});
	it('triggers a hit', () => {
		render(<App />);
		render(<Display />);
		const { getByTestId } = render(<Dashboard />);

		const hitButton = getByTestId('hitBtn');

		fireEvent.click(hitButton);

		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0]/i);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[0]/i);
	});
});
