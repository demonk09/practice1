// import React from 'react'

import { useState } from "react"



function Third() {
    let qns=[
        {"q":" What is React.js?","op1":" Open-source JavaScript back-end library","op2":"JavaScript front-end library to create a database","op3":" Free and open-source JavaScript front-end library","op4":"None of the mentioned"},
        {"q":"Which of the following acts as the input of a class-based component?","op1":"Class","op2":"Props","op3":"Factory","op4":"None of the mentioned"},
        {"q":"React.js is written in which of the following language?","op1":"C","op2":"C++","op3":"JavaScript","op4":"Java"},
        {"q":"How many elements can a valid react component return?","op1":"React doesn’t return element","op2":"1 Element","op3":"More than 1 element","op4":"None of the mentioned"},
        {"q":"In which of the following directory React Components are saved?","op1":"Inside js/components/","op2":" Inside components/js/","op3":"Inside vendor/js/components/","op4":"Inside vendor/components/"},
        {"q":"Which of the following command is used to Install create-react-app?","op1":"npm install create-react-app","op2":"npm install -f create-react-app","op3":"npm install -g create-react-app","op4":"install -g create-react-app"},
    ]
    let ans={"q1":3,"q2":2,"q3":4,"q4":2,"q5":1,"q6":3}

    let [usernas,setUser]=useState({})
    let [score,setScore]=useState("")
    

    let fun=(e)=>{
        setUser({...usernas,[e.target.name]:e.target.value})
    }
    
    let result=()=>{
            let c=0
            for(let p in usernas){
                if (usernas[p]==ans[p]) {
                    
                    c++
                }
            }
            setScore(c)
    }
    
  return (
    <div>
        {
            qns.map((item,index)=>{
                return(  <div>
                    <div>
                        <h1>{item.q}</h1>
                    </div>
                  
                        <div>
                            <input type="radio"  value="1" onChange={fun} name={`q${index+1}`}/>{item.op1}
                            <input type="radio"  value="2" onChange={fun} name={`q${index+1}`}/>{item.op2}
                            <input type="radio"  value="3" onChange={fun} name={`q${index+1}`}/>{item.op3}
                            <input type="radio"  value="4" onChange={fun} name={`q${index+1}`}/>{item.op4}
                        </div>

                    </div>

                )
            })
        }
        <button onClick={result}>SUBMIT</button>
        {score!=""&& <div>result:{score}</div>}
    </div>
  )
}

export default Third
