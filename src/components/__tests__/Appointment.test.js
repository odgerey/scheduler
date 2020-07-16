import React from "react";

import "@testing-library/jest-dom"

import {render, fireEvent, cleanup, screen} from '@testing-library/react'


import Appointment from "components/Appointment/index";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Appointment />);
});

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});