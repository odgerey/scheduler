export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(({name}) => name === day)
  const appointments = filteredDay ? filteredDay.appointments.map(appointmentId => state.appointments[appointmentId]) : []
  return appointments
}


export function getInterview(state, interview) {
  let newObject
  if(interview) {
    newObject =  { "student" : interview.student,
    "interviewer": state.interviewers[interview.interviewer]
    }
  } else {
    return null;
  }
}


export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find(({name}) => name === day)
  const interviewers = filteredDay ? filteredDay.interviewers.map(appointmentId => state.interviewers[appointmentId]) : [];
  return interviewers;
}