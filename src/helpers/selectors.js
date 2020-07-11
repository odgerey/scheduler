// export function getAppointmentsForDay(state, day) {

// const filteredDays = state.days.filter(({appointmentDay}) => appointmentDay === day );
// const appointments = filteredDays ? filteredDays.appointments.map(appointmentId => state.appointments[appointmentId]) : []

//   return appointments
// }


export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(({name}) => name === day)
  const appointments = filteredDay ? filteredDay.appointments.map(appointmentId => state.appointments[appointmentId]) : []

  return appointments;
}

export function getInterview(state, interview) {
  const newObject = {
    "student" : state.interview.student,
    "interviewer": state.interviewers[interview.interviewer]
  }
  return interview ?  newObject : null
}


export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find(({name}) => name === day)
  const interviewers = filteredDay ? filteredDay.interviewers.map(appointmentId => state.interviewers[appointmentId]) : []

  return interviewers
}

  



