// import Appointment from "components/Appointment/index";
import React from "react";
import "components/Appointment/styles.scss";

import Header from "./header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "components/Appointment/Form";
// import Status from "components/Appointment/Status";
// import Confirm from "components/Appointment/Confirm";


export default function Appointment (props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


   
  return (
  <article className="appointment">

<Header time={props.time}/>
  {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />}
  </article>
);
}