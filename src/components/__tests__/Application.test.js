import React from "react";

// import "@testing-library/jest-dom"

import {render, cleanup} from '@testing-library/react'


import Application from "components/Application";

afterEach(cleanup);

it("defaults to Monday and changes the schedule when a new day is selected.", () => {
  render(<Application />);
});
