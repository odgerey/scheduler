

import "components/Application.scss";

import DayList from "components/DayList";

import InterviewerList from "components/InterviewerList";

import InterviewerListItem from "components/InterviewerListItem";

import React, { useState, useEffect } from "react";

import Appointment from "components/Appointment";

import axios from "axios";


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3, 
    time: "2pm",
    interview: {
      student: "Mila Kunis",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar:"https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];

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
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([])

  useEffect(() => {
      axios
      .get("/api/days")
      .then(response => setDays(response.data))
    
  },[])



  const schedule = appointments.map(appointment => {
    return (
      <Appointment key={appointment.id} {...appointment} />
          // <Appointment 
          // id={props.id}
          // time={props.time}
          // interview={props.interview}
          // />
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
  days={days}
  day={day}
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

