import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from "./Timer/Timer";


describe('App', () => {
	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});
});

describe("App", () => {
	let container

	beforeEach(() => (container = shallow(<App />)))

	it("Sould render a <div />", () => {
		expect(container.find("div").length).toEqual(1)
	})

	it("Sould render the Timer component", () => {
		expect(container.containsMatchingElement(<Timer />)).toEqual(true)
	})
})