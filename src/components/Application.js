

import "components/Application.scss";

import DayList from "components/DayList";

import InterviewerList from "components/InterviewerList";

import InterviewerListItem from "components/InterviewerListItem";

import React, { useState, useEffect } from "react";

import Appointment from "components/Appointment";

import axios from "axios";

import { getAppointmentsForDay } from "../helpers/selectors";


// 
// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];


export default function Application(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([])
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  const setDay = day => setState({ ...state, day });
  


  useEffect(() => {
      const daysAPI = axios.get("/api/days")
      const appAPI = axios.get("/api/appointments")
      const interviewersAPI= axios.get("/api/interviewers")
      
      Promise.all([
        Promise.resolve(daysAPI),
        Promise.resolve(appAPI),
        Promise.resolve(interviewersAPI)
      ])
      .then(all => {(setState(prev => ({ ...prev, daysAPI: all[0].data, appAPI:all[1].data, interviewersAPI:all[2].data })))
    })
  });

 

  // function getInterviewersForDay(state, day) {

  // }
  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map(appointment => {
    const interview = getInterview(state, appointment.interview)
    return (
      // <Appointment key={appointment.id} {...appointment} />
          <Appointment 
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
          />
    )})


  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
  <DayList
  days={state.days}
  day={state.day}
  setDay ={setDay}
  
  />
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
      {schedule}
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

