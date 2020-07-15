import React from "react";

// import "@testing-library/jest-dom"

import {render, fireEvent, cleanup, screen, waitForElement, getByText } from '@testing-library/react'


import Application from "components/Application";

afterEach(cleanup);

it("changes the schedule when a new day is selected", async () => {
  const { getByText } = render(<Application />);

  await waitForElement(() => getByText("Monday"));

  fireEvent.click(getByText("Tuesday"));

  expect(getByText("Leopold Silvers")).toBeInTheDocument();
});