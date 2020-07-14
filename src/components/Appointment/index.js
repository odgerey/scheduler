// import Appointment from "components/Appointment/index";
import React from "react";
import "components/Appointment/styles.scss";

import useVisualMode from "hooks/useVisualMode"

import Header from "./header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "components/Appointment/Form"
import Confirm from "./Confirm"
import Status from "./Status"
import Error from "./Error"



export default function Appointment (props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode (
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  }
   
  return (
    <> 
      <Header time={props.time}/>
      <article className="appointment">
        {mode === EMPTY && (
          <Empty 
            onAdd={() => transition(CREATE)} 
          />
        )}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer.name}
          />
        )}  
        {mode === CREATE && (
          <Form
            interviewers={props.interviewers}
            onSave={props.onSave}
            onCancel={back}
          />
        )}
      </article>
    </>
  )
}