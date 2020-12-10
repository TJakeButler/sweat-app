import React, { useContext } from "react"
import { useForm } from "react-hook-form";



export const ExerciseLogForm = () => {
const {register, handleSubmit} = useForm();
const onSubmit = (data) => {
    data["userId"] = parseInt(data.userId)
    console.log(data)
}

    return (
        <>
        <h1>Log your new exercise!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Sets" name="sets" ref={register}/>
            <input type="text" placeholder="Weight" name="weight" ref={register}/>
            <input type="text" placeholder="Effort" name="effortId" ref={register}/>
            <input type="text" placeholder="Attitude" name="effortId" ref={register}/>
            <input type="text" placeholder="Effort" name="attitude" ref={register}/>
            <input type="text" placeholder="Time" name="workoutTime" ref={register}/>
            <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )

    
}


