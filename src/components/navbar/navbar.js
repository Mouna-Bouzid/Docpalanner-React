import  React from 'react'
import './navbar.css'

export default function (props){
return(
    <div className="navbar">
<img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />

<ul className="menu_list">
{props.NavbarList.map((el,i) =>(
<li key={i} class="menu_list_item"> {(el.active) ? (<li key={i} style={{color:"#00BFA5"}} className="menu_list_item">{el.label}</li>): (el.label)}
<ul className="dropdown_list">
{(el.dropdown) && (el.dropdown.map((x,i)=> (
<li key={i} className="dropdown_list_item">{x}</li>)))
}
</ul>
</li>
)
)}
</ul>
</div>
)
}