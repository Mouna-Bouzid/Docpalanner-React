import React from 'react'
import './BoxesPatientDoctor.css'

export default function (props){
return(
<div className="p-box">

    {props.boxes.map((el,i)=> (
        <div key={i} className="box-container">
    <p className="paragraphs">{el.p1}</p>
    <div className="box_specifications" style={el.style}>
    <h2>{el.h1}</h2>
    <p>{el.t1}</p>
    {(el.switcher==true) ? 
    <div className="btn_img">
     <select className="btn_select">
                      <option>Choose country</option>
                                      <option value="http://www.doctoraliar.com">Argentina</option>
                                        <option value="http://www.doctoralia.com.au">Australia</option>
                                        <option value="http://www.doctoralia.com.br">Brazil</option>
                                        <option value="http://www.doctoralia.cl">Chile</option>
                                        <option value="http://www.doctoralia.co">Colombia</option>
                                        <option value="http://www.znamylekar.cz">Czech</option>
                                        <option value="http://www.doctoralia-fr.com">France</option>
                                        <option value="http://www.miodottore.it">Italy</option>
                                        <option value="http://www.doctoralia.com.mx">Mexico</option>
                                        <option value="http://www.doctoralia.pe">Peru</option>
                                        <option value="http://www.znanylekarz.pl">Poland</option>
                                        <option value="http://www.doctoralia.com.pt">Portugal</option>
                                        <option value="http://www.doctoralia.es">Spain</option>
                                        <option value="http://www.doktortakvimi.com">Turkey</option>
                                        <option value="http://www.doctoralia.co.uk">UK</option>
                  </select>
    <img src={el.imgsrc}></img>
    </div>:<img src={el.imgsrc}></img>}
    {/* <img src={el.imgsrc}></img> */}
    </div>
    </div>
    )
    )}

</div>

)
}