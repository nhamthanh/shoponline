import React from "react";
import { shallow } from "enzyme";
import Products from "./product-list";

describe("Products", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Products />);
    expect(wrapper).toMatchSnapshot();
  });
});
