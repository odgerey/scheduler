// export function getAppointmentsForDay(state, day) {

// const filteredDays = state.days.filter(({appointmentDay}) => appointmentDay === day );
// const appointments = filteredDays ? filteredDays.appointments.map(appointmentId => state.appointments[appointmentId]) : []

//   return appointments
// }


export function getAppointmentsForDay(state, day) {
  const currentDay = state.days.find(({name}) => name === day)

  const appointments = currentDay ? currentDay.appointments.map(appointmentId => state.appointments[appointmentId]) : []

  return appointments
}

  



