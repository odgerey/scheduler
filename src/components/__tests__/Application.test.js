import React from "react";
import axios from "axios";
// import "@testing-library/jest-dom"

import {
  render, 
  fireEvent, 
  screen, 
  cleanup, 
  waitForElement, 
  getBy,
  getByText, 
  getByAltText, 
  getAllByTestId, 
  getByPlaceholderText, 
  queryByText,
  queryByAltText,
  findByText,
  findBy,
  prettyDOM 
} from '@testing-library/react'

import Application from "components/Application";

afterEach(cleanup);
describe("Application", () => {
  it("changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);
    await waitForElement(() => getByText("Monday"));
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });


  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];
    fireEvent.click(getByAltText(appointment, "Add"));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), 
      {
        target: { value: "Lydia Miller-Jones" }
      });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));
    expect(getByText(appointment, "Saving")).toBeInTheDocument();
    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));
    const day = getAllByTestId(container, "day")
      .find(day =>
        queryByText(day, "Monday")
      );
    expect(getByText(day, "1 spot remaining")).toBeInTheDocument();
  });


  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
   
    const { container } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment")
      .find(
        appointment => queryByText(appointment, "Archie Cohen")
      );
    fireEvent.click(queryByAltText(appointment, "Delete"));
    expect(getByText(appointment, "Cancel appointment?")).toBeInTheDocument();
    fireEvent.click(queryByText(appointment, "Confirm"));
    expect(getByText(appointment, "Deleting")).toBeInTheDocument();
    await waitForElement(() => getByAltText(appointment, "Add"));
    const day = getAllByTestId(container, "day")
      .find(day =>
        queryByText(day, "Monday")
      );
    expect(getByText(day, "1 spot remaining")).toBeInTheDocument();
  });


  it("loads data, edits an interview and keeps the spots remaining for Monday the same", async () => {

    const { container } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment").find(
      appointment => queryByText(appointment, "Archie Cohen")
      );
    fireEvent.click(queryByAltText(appointment, "Edit"));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), 
      {
        target: { value: "Lydia Miller-Jones" }
      });
    fireEvent.click(getByText(appointment, "Save"));
    expect(getByText(appointment, "Saving")).toBeInTheDocument();
    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));
    const day = getAllByTestId(container, "day")
      .find(day => {
      return queryByText(day, "Monday");
      });
    expect(getByText(day, "1 spot remaining")).toBeInTheDocument();
  });

  it("shows the save error when failing to save an appointment", async () => {

    axios.put.mockRejectedValueOnce();
    const { container } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment")[0]   
    fireEvent.click(queryByAltText(appointment, "Add"));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), 
      {
        target: { value: "New Student" }
      });
    fireEvent.click(getByText(appointment, "Save"));
    await waitForElement(() =>
      getByText(appointment, "Could not save appointment")
    );
  });
  
  it("shows the delete error when failing to delete an existing appointment", async () => {

    axios.delete.mockRejectedValueOnce();
    const { container } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment")
      .find(
        appointment => queryByText(appointment, "Archie Cohen")
      );
    fireEvent.click(queryByAltText(appointment, "Delete"));
    expect(
      getByText(appointment, "Cancel appointment?")).toBeInTheDocument();
    fireEvent.click(queryByText(appointment, "Confirm"));
    await waitForElement(() =>
      getByText(appointment, "Error, appointment was not deleted")
    );
  })
})

