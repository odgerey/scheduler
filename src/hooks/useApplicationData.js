import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  const setDay = day => setState({ ...state, day });

  function cancelInterview (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios.delete(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((response) => {
        setState({
          ...state, appointments
        });
      });
  }


  
//   // function deleteInterview() {
//   //   props.cancelInterview(props.id, transition(DELETING))
//   //     .then(() => {transition(EMPTY)})
//   // }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments
    });
    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((response) => {
        setState({
          ...state, appointments
        });
      });

  }

  useEffect(() => {

      Promise.all([
        axios.get("/api/days"),
        axios.get("/api/appointments"),
        axios.get("/api/interviewers"),

      ])
      .then(all => {(setState
        ({ ...state, days:all[0].data, appointments:all[1].data, interviewers:all[2].data
        })
      )})
  },[]);
 
  return { state, setDay, bookInterview, cancelInterview };
}