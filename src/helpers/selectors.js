export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(({name}) => name === day)
  const appointments = filteredDay ? filteredDay.appointments.map(appointment => state.appointments[appointment]) : [];
  return appointments;
}


export function getInterview(state, interview) {
  let newObject
  if(interview) {
    newObject =  { 
      "student" : interview.student,
      "interviewer": state.interviewers[interview.interviewer]
    }
    return newObject;
  } else {
    return null;
  }
}


export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find(({name}) => name === day)
  const interviewers = filteredDay ? filteredDay.interviewers.map(interviewer => state.interviewers[interviewer]) : [];
  console.log("Interviewers => ", interviewers)
  console.log("Filtered Days => ", filteredDay)
  return interviewers;
}