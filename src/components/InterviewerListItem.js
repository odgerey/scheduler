import React from "react";
import "components/InterviewerListItem.scss";
import classNames from 'classnames/bind';

export default function InterviewerListItem(props) {
      const interviewerClass = classNames("interviewers", {
        "interviewers__item--selected" : props.selected
      })
    
  return (
    <li className="interviewers__item">
    <img
      className="interviewers__item-image"
      src="https://i.imgur.com/LpaY82x.png"
      alt="Sylvia Palmer"
    />
    Sylvia Palmer
    </li>
  )
}


    // const interviewers = props.interviewers.map(interviewer => {
    //   return (< InterviewerListItem
    //     id={interviewer.id} 
    //     name={interviewer.name} 
    //     avatar={interviewer.url}
    //     selected={interviewer.name === props.interviewer} 
    //     setInterviewer={props.setInterviewer} 
    //     />)})
    //     return interviewers;
