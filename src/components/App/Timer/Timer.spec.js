import React from "react"
import { shallow, mount } from "enzyme"
import Timer from "./Timer";

describe(
    "Timer",
    () => {
        let container

        beforeEach(
            () => (container = shallow(<Timer />))
        )

        it(
            "should render a <div />",
            () => {
              console.log("Timer : Container --> ", container)
                expect(container.find("div").length).toBeGreaterThanOrEqual(1)
            }
        )

        it("should render instances of the TimerButton component", () => {
            expect(container.find("TimerButton").length).toEqual(3)
          })
    }
)


describe('mounted Timer', () => {
    let container;
  
    beforeEach(() => (container = mount(<Timer />) )
    );
  
    it('invokes startTimer when the start button is clicked', () => {
      // let container = mount(<Timer />)
      console.log("startTime : ", container.prototype)
      const spy = jest.spyOn(container.instance(), 'startTimer');
      container.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0);
      container.find('.start-timer').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  
    it('invokes stopTimer when the stop button is clicked', () => {
      const spy = jest.spyOn(container.instance(), 'stopTimer');
      container.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0);
      container.find('.stop-timer').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  
    it('invokes resetTimer when the reset button is clicked', () => {
      const spy = jest.spyOn(container.instance(), 'resetTimer');
      container.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0);
      container.find('.reset-timer').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });