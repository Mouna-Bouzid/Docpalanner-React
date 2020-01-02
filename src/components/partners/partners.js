import  React from 'react'
import './partners.css'
export default function (props){
return(
    <div>
<ul className="brands__logos">
{props.partner.map((el,i) =>(
   
     <li key={i}>
     <a href={el.href} target="_blank">
       <svg xmlns={el.xmlns}  viewBox="0 0 200 32">
         <path d={el.path}></path>
       </svg>
     </a>
   </li>
  
)
)}
</ul>
</div>
)
}