// import React from 'react'
import {useState} from 'react'
import Disp2 from './Disp2'

function Second() {

    let[data,setData]=useState([])
    let[lang,setLang]=useState([])
    let[user,setUser]=useState([])


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
    let add=()=>{
        setUser([...user,{...data,lang:[...lang]}])
    }
    
    
  return (
    <div>
      <input type="text" name="name" onChange={fun}/>
      <div>
        <input type="radio" name="gen" value="male" onChange={fun}/>MALE
        <input type="radio" name="gen" value="male" onChange={fun}/>FEMALE
      </div>
      <div>
          <input type="checkbox"  value="telgu" onChange={fun1}/>TELGUE
          <input type="checkbox"  value="hindi" onChange={fun1}/>HINDI
          <input type="checkbox"  value="english" onChange={fun1}/>ENGLISH
        </div>
        <button onClick={add}>ADD</button>

        <div>
            <table border={1}>
                <tr>
                    <th>NAME</th>
                    <th>gender</th>
                    <th>language</th>
                </tr>
                {
                    user.map((item)=><Disp2 data={item} lang={item.lang} />)
                }
            </table>
        </div>
    </div>
  )
}

export default Second
