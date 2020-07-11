import React from "react";

// import "@testing-library/jest-dom"

import {render, cleanup} from '@testing-library/react'


import Application from "components/Application";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
