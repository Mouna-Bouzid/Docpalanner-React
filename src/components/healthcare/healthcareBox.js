import  React from 'react'
import './healthcareBox.css'

export default function (props){

    return(
        <div>
        {props.infoBox.map((el, i) =>(
        <div key={i} className="whitebox">
        <img src={el.src} />
        <h3 class="h5">{el.text}</h3>
        <p>{el.p}</p>
      </div>)
      )}
      </div>
      )
    }