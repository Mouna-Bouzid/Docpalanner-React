import  React from 'react'
import './cards.css'

export default function (props){

    return(
        <div className="imgboxes">
        {props.cards.map((el, i) =>(
        <div key={i} className="imgbox">
        <img src={el.src} />
    
        <div className="imgbutton">
        <p>{el.country}</p>
          <button>SEE OPENNINGS</button>
          </div>
        </div>)
      )}
      </div>
      )
    }