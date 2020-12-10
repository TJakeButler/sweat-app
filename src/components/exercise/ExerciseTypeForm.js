import React, { useContext, useEffect, useRef } from "react"
import { useForm } from "react-hook-form";
import { ExerciseTypeContext } from "./ExeriseTypeProvider";


export const ExerciseTypeForm = (props) => {
    const { addExerciseType} = useContext(ExerciseTypeContext)
    
    // const name = useRef()
    // const userId = useRef()

    // useEffect(() => {
    //     getExerciseTypes()
    // }, [])
    
    const createNewExerciseType = () => {
        
}
const {register, handleSubmit } = useForm(); 
const onSubmit = data => {
    data["userId"] = parseInt(data.userId)
    addExerciseType(data)
}
    
return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="New Exercise" name="name" ref={register}/>
            <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register}/>
            <button type="submit">Submit</button>
        </form>
    )

    
}


// const getExerciseTypes = () => {
//     return fetch("http://localhost:8088/exerciseTypes")
//     .then(res => res.json())
// }

// const addExerciseType = data => {
//     data["userId"] = parseInt(data["userId"])
//     return fetch("http://localhost:8088/exerciseTypes", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//     .then(getExerciseTypes)
    
// }