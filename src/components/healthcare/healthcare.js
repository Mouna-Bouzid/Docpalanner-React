import  React from 'react'
import './healthcare.css'

export default function (props){

    return(
    <div className="right">

    <div className="plateform_container">
    <h3 className="h3">{props.plateform.p1}</h3>
    <h4 className="h3">{props.plateform.p2}</h4>
    <p>{props.plateform.p3}</p>
    </div>

    <img className="big_logo" src={props.plateform.image} />
    </div>
      )
    }