import React from "react";

import "@testing-library/jest-dom"

import {render, fireEvent, cleanup, screen} from '@testing-library/react'


import Application from "components/Application";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
