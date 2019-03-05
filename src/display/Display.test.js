import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		render(<Display />);
	});

	afterEach(cleanup);
	it('shows balls for the at-bat', () => {
		const { getByTestId, rerender } = render(<Display balls={0} />);

		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0-4]/i);

		rerender(<Display balls={1} />);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0-4]/i);

		rerender(<Display balls={2} />);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0-4]/i);

		rerender(<Display balls={3} />);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0-4]/i);

		rerender(<Display balls={4} />);
		expect(getByTestId('balls').textContent).toMatch(/balls:\s[0-4]/i);
	});

	afterEach(cleanup);
	it('shows strikes for the at-bat', () => {
		const { getByTestId, rerender } = render(<Display strikes={0} />);

		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[0-4]/i);

		rerender(<Display strikes={1} />);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[0-4]/i);

		rerender(<Display strikes={2} />);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[0-4]/i);

		rerender(<Display strikes={3} />);
		expect(getByTestId('strikes').textContent).toMatch(/strikes:\s[0-4]/i);
	});
});
