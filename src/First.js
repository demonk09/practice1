// import React from 'react'
import {useState} from 'react'
import Disp from './Disp'

function First() {
    let[data,setData]=useState([])
    let[lang,setLang]=useState([])
  
  let fun=(e)=>{
   
      setData({...data,[e.target.name]:e.target.value})
    
  }
  let fun1=(e)=>{
    if (e.target.checked) {
      setLang([...lang,e.target.value])
    }
    else{
      lang.splice(lang.indexOf(e.target.value),1)
      setLang([...lang])
    }
  }
  
    return (
      <div>
        <input type="text" name="name" onChange={fun} />
        <div>
          <input type="radio" name="gen" onChange={fun} value="male"/>MALE
          <input type="radio" name="gen" onChange={fun} value="female"/>FEMALE
        </div>
        <div>
          <input type="checkbox"  value="telgu" onChange={fun1}/>TELGUE
          <input type="checkbox"  value="hindi" onChange={fun1}/>HINDI
          <input type="checkbox"  value="english" onChange={fun1}/>ENGLISH
        </div>
  
        <Disp data={data} lang={lang} />
      </div>
    )
}

export default First
