import  React from 'react'
import './footer.css'

export default function (props){
    // let m={props.footer.length}
    return(
        <div className="footer">
            

        {props.footer.map((el, i) =>(
           
        <div key={i} className="footer_container">
            
            
        <span>{el.p1}</span>
        <span className="lien">{el.liens.map((x,y) =>
          (<span key={y}>
            {(y<8) && (x+', ') }  
            {(y===8) && (x+' and ')}
            {(y===9) && (x+' .')}
              </span>)  
            )}</span>
        <p>{el.p2}</p>
        <p>{el.p3}</p>

        </div>)
      )}
      </div>
      )
    }