import React, { useContext, useEffect, useRef } from "react"
import { useForm } from "react-hook-form";
import { ExerciseTypeContext } from "./ExeriseTypeProvider";



export const ExerciseTypeForm = (props) => {
    const { addExerciseType} = useContext(ExerciseTypeContext)
    
    
const {register, handleSubmit } = useForm(); 
const onSubmit = data => {
    data["userId"] = parseInt(data.userId)
    addExerciseType(data).then(() => props.history.push('/exerciseTypes'))
    console.log(data)
}
    
return (
    <>
    <h1>Create New Exercise Type!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="New Exercise" name="name" ref={register}/>
            <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )

    
}


