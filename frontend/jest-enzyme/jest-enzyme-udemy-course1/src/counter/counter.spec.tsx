import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Counter } from "./counter";
// import sleep from "sleep";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Counter />);

test("Counter component should render correctly", () => {
  const counterWrapper = setup();
  expect(counterWrapper).toBeTruthy();
});

test("Counter value should exist", () => {
  const counterWrapper = setup();
  const counterEl = counterWrapper.find('[data-test="counter-value"]');
  expect(counterEl).toBeTruthy();
});

test("Increment button should exist in Counter Component", () => {
  const counterWrapper = setup();
  const incrementBtnEl = counterWrapper.find("[data-test='increment-button']");
  expect(incrementBtnEl.length).toBe(1);
});

test("Decrement button should exist in Counter Component", () => {
  const counterWrapper = setup();
  const decrementBtnEl = counterWrapper.find("[data-test='decrement-button']");
  expect(decrementBtnEl.length).toBe(1);
});

test("Initially counter should be setup to zero", () => {
  const counterWrapper = setup();
  const countEl = counterWrapper.find("[data-test='counter-value']");
  expect(countEl).toBeTruthy();
  expect(countEl.text()).toBe("0");
});

test("Increment button should increase the Count", () => {
  const counterWrapper = setup();
  const incrementButtonEl = counterWrapper.find(
    "[data-test='increment-button']"
  );
  incrementButtonEl.simulate("click");
  const countEl = counterWrapper.find("[data-test='counter-value']");
  expect(countEl.text()).toBe("1");
});

test("Decrement button should decrease the Count", () => {
  const counterWrapper = setup();
  const incrementButtonEl = counterWrapper.find(
    "[data-test='increment-button']"
  );
  incrementButtonEl.simulate("click");

  let countEl = counterWrapper.find("[data-test='counter-value']");
  expect(countEl.text()).toBe("1");

  const decrementButtonEl = counterWrapper.find(
    "[data-test='decrement-button']"
  );
  decrementButtonEl.simulate("click");
  countEl = counterWrapper.find("[data-test='counter-value']");
  expect(countEl.text()).toBe("0");
});
