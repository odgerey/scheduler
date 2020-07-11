// import Appointment from "components/Appointment/index";
import React from "react";
import "components/Appointment/styles.scss";

import useVisualMode from "hooks/useVisualMode";
import Header from "components/Appointment/Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";

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
    id:3,
    time:"12pm",
    interview: {
      student:"Janette Bertrand",
      interviewer: {
        id:1,
        name:"Sylvia Palmer",
        avatar:"https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];

export default function Appointment (props) {
  return (
  <article className="appointment">

<Header className="appointment__time">
  <h4 className="text--semi-bold">{props.time}</h4>
  <hr className="appointment__separator" />
</Header>
   <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />
  </article>
);
}