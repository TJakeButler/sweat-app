import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form";
import {ExerciseLogContext} from './ExerciseLogProvider'
import {EffortContext} from '../effort/EffortProvider'




export const ExerciseLogForm = () => {
const {addExerciseLog} = useContext(ExerciseLogContext)
const { effort,getEffort} = useContext(EffortContext)

useEffect(() => {
    getEffort()
    console.log(effort)
}, [])

useEffect(() => {
    console.log('useEffect state', effort)
},[effort])


const {register, handleSubmit} = useForm();

const onSubmit = (data) => {
    data["userId"] = parseInt(data.userId)
    data["sets"] = parseInt(data.sets)
    data["weight"] = parseInt(data.weight)
    // data["effortId"] = parseInt(data.effortId)
    data["workoutTime"] = parseInt(data.workoutTime)
    
    addExerciseLog(data)
    console.log(data)
}

    return (
        <>
        <h1>Log your new exercise!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Sets" name="sets" ref={register}/>
            <input type="text" placeholder="Weight" name="weight" ref={register}/>
            {/* <input type="text" placeholder="Effort" name="effortId" ref={register}/> */}
            <select name="effort" placeholder="" ref={register}>
                
            <option value="0">--Please choose an option--</option>
            {effort.map(effort => (<option key={effort.id} value={effort.description}>
                                {effort.description}
                            </option>))}
            </select>
        
            <input type="text" placeholder="Attitude" name="attitude" ref={register}/>
            <input type="text" placeholder="Time" name="workoutTime" ref={register}/>
            <input type="hidden" value={new Date().toLocaleDateString('en-US')} name="date" ref={register}/>
            
            <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )

}


