// import Appointment from "components/Appointment/index";
import React,  from "react";
import "components/Appointment/styles.scss";

import header from "./header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment (props) {
  return (
  <article className="appointment">

  <header time={props.time}/>
  {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />}
  </article>
);
}