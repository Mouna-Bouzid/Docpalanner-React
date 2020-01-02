import  React from 'react'
import './improvement.css'

export default function (props){

    return(
        <div>
        {props.changes.map((el, i) =>(
        <div key={i}>
        {(i===2)? <p className="text">{el}</p> : <p className="head">{el}</p>}
      </div>)
      )}
      </div>
      )
    }