import React from "react";
import App from "./App";
import { shallow } from "enzyme";

test("App element renders", () => {
  const appShallowWrapper = shallow(<App />);
  expect(appShallowWrapper).toBeTruthy();
});
