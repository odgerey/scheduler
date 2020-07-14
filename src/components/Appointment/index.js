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

  function onAdd() {
    transition(CREATE)
  }

  function onCancel() {
    back()
  }


  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview) 
    transition(SHOW)
    console.log(props.id)
  }


  function onEdit() {
    console.log("Editing =>", props.interview.interviewer)
    transition(EDIT)
  }


  function onDelete() {
    transition(CONFIRM);
  }

  function onConfirm() {
    transition(DELETING);
    props.cancelInterview(props.id) ? transition(EMPTY) : transition(ERROR_DELETE)
  }

   
  return (
    <> 
      <Header time={props.time}/>
      <article className="appointment">
        {mode === EMPTY && (
          <Empty 
            onAdd={onAdd} 
          />
        )}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}  
        {mode === CREATE && (
          <Form
            interviewers={props.interviewers}
            onSave={save}
            onCancel={onCancel}
          />
        )}
        {mode === SAVING && (
          <Status
            message="Saving"
          />
        )}
        {mode === DELETING && (
          <Status
            message="Deleting"
          />
        )}
        {mode === CONFIRM && (
          <Confirm
            message="Cancel appointment?"
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        )}
        {mode === EDIT && (
          <Form
            interviewers={props.interviewers}
            onCancel={onCancel}
            onSave={save}
            name={props.interview.student}
            interviewer={props.interview.interviewer.id}
          />
        )}
        {mode === ERROR_SAVE && (
          <Error
            message="Error, appointment was not saved"
            onClose={onCancel}
          />
        )}
        {mode === ERROR_DELETE && (
          <Error
            message="Error, appointment was not deleted"
            onClose{...onCancel}
          />
        )}
      </article>
    </>
  )
}