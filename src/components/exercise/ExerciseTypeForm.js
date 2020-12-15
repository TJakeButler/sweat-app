import React, { useContext } from "react"
import { useForm } from "react-hook-form";
import { ExerciseTypeContext } from "./ExeriseTypeProvider";
import {Button} from 'reactstrap'



export const ExerciseTypeForm = (props) => {
    const { addExerciseType} = useContext(ExerciseTypeContext)
    
    
const {register, handleSubmit } = useForm(); 
const onSubmit = data => {
    data["userId"] = parseInt(data.userId)
    addExerciseType(data).then(() => props.history.push('/exerciseTypes'))
    
}
    
return (
    <>
    <h1>Create New Exercise Type!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <input type="text" placeholder="New Exercise" name="name" ref={register}/>
            </div>
            <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register}/>
            <Button type="submit">Submit</Button>
        </form>
        </>
    )

    
}


// ******* THIS MODULE RENDERS THE EXERCISE TYPE FORM TO THE DOM WHICH IS USING THE USE FORM HOOK FROM REACT-HOOK-FORM. THIS FORM IS SENDING THE DATA VIA THE HANDLESUBMIT FUNCTION AND THAT DATA IS GIVEN AS A PARAM TO THE ADDEXERCISETYPE FUNCTION WHICH I IMPORTED THROUGH EXERCISETYPECONTEXT, THE ADDEXERCISETYPE FUNCTION POSTS THIS OBJECT TO THE JSON SERVER AND .THEN IT IS SENDING THE USER TO THE EXERCISETYPES PAGE TO VIEW ALL THEIR OTHER EXERCISES THAT THEY HAVE CREATED.  ****** // 