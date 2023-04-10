import React from 'react'
import { useState } from 'react'

export const Counter = () => {
      const  [counter,setCounter] = useState(1)
      const clicked =()=>{
     
            if(counter>=0){
                  setCounter(counter+1)
            }
      }
      const clicked1 = ( ) =>{
           if(counter>=1){
            setCounter(counter-1)
           }
      }
      const reset = ( ) =>{
            setCounter(counter*0)
      }
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{textAlign:"center"}}>Counter Application</h1>
      <h1>{counter}</h1>
      <button onClick={clicked} disabled={counter<=4?false:true} style={{backgroundColor:counter===5&&"red",marginLeft:'5px'}} className='btn btn-dark'><span><i class="fa-solid fa-plus"></i></span></button>
      <button onClick={clicked1} className='btn btn-primary' style={{marginLeft:'5px'}}> <span><i class="fa-solid fa-minus"></i></span></button>
      <button style={{marginLeft:'5px'}} onClick={reset} className='btn btn-danger' ><span><i class="fa-sharp fa-solid fa-power-off"></i></span></button>
    </div>
  )
}
