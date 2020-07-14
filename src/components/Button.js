
import "components/Button.scss";

import React  from 'react';
import classNames from 'classnames/bind';

export default function Button(props) {
   const buttonClass = classNames("button", {
      "button--confirm" : props.confirm, 
      "button--danger": props.danger
   });

   return (
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}>
      {props.children}
      </button>
   );
}

// export default function Button(props) {
//    let buttonClass = "button";
 
//    if (props.confirm) {
//      buttonClass += " button--confirm";
//    }
//    if (props.danger) {
//       buttonClass += " button--danger";
//    }
 
//    return (
//    <button 
//       className={buttonClass} 
//       onClick= {props.onClick}
//       disabled={props.disabled}
//    >
//    {props.children}
//    </button>
//    );
//  }





 //<------ TERNARY OPERATOR --------->

//  return (
//    <button className = { props.confirm ? `${buttonClass} button--confirm` : buttonClass   }>
//           {props.children} 
//       </button> )
// //  }

// <-------------&& = rendering ----------------------->

// return (
//    <button className={buttonClass}>
//       {props.confirm && <b>Confirm this</b>}
//       {props.children}
//    </button>
// )
// }
