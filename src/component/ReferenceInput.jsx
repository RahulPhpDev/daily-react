import React, {  useState , useEffect } from 'react'

const { useRef  } = React;

const  ReferenceInput = () => {
    const inputReference = useRef(null);

    useEffect( () => {
        inputReference.current.focus() ;
        console.log(inputReference.current.length)

    }, [])
    
    const submitClick = () => {
     //put your logic and reset the value of input type
        // inputReference.current.value = '';
    }
    return (
        <div>

            <input className="text-black" 
             type = "text"
             ref = {inputReference} 
            />

            <input className="text-black" 
             type = "text"
             ref = {inputReference} 
            />

            <button className="bg-blue-500 ml-4 p-2 br-50" onClick = {() => submitClick()} > Submit </button>
           
            {/* <input  
                className="text-black" 
                name = "age" 
                type = "text" 
                value = {age} 
                onChange = {(e)=> setAge(e.target.value)} 
            />  */}


        </div>
    )
}

export default ReferenceInput
