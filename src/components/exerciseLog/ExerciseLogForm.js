import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form";
import { ExerciseLogContext } from './ExerciseLogProvider'
import { EffortContext } from '../effort/EffortProvider'
import { ExerciseTypeContext } from "../exercise/ExeriseTypeProvider";
import {Button} from 'reactstrap'

export const ExerciseLogForm = (props) => {
    const { addExerciseLog } = useContext(ExerciseLogContext)
    const { effort, getEffort } = useContext(EffortContext)
    const { exerciseTypes, getExerciseTypes } = useContext(ExerciseTypeContext)

    useEffect(() => {
        getEffort()

    }, [])

    useEffect(() => {
        getExerciseTypes()
       
    }, [])

    const { register, handleSubmit } = useForm();
    const currentlyLoggedInuser = parseInt(localStorage.getItem("app_user_id"))

    const onSubmit = (data) => {
        data["userId"] = parseInt(data.userId)
        data["sets"] = parseInt(data.sets)
        data["weight"] = parseInt(data.weight)
        data["workoutTime"] = parseInt(data.workoutTime)
        data["exerciseTypeId"] = parseInt(data.exerciseTypeId)
        data["effortId"] = parseInt(data.effortId)
        
        addExerciseLog(data).then(() => props.history.push('/exerciseLogs'))
        
    }

    return (
        <>
            <h1>Log your new exercise!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="exerciseTypeId" placeholder="" ref={register}>

                    <option value="0">---Select Your Exercise Type---</option>
                    {exerciseTypes.map(exerciseTypes => {


                        if (exerciseTypes.userId === currentlyLoggedInuser) {
                            
                            return (<option key={exerciseTypes.id} value={exerciseTypes.id}>
                                {exerciseTypes.name}
                            </option>)
                        }
                    })}


                </select>

                <input type="text" placeholder="Sets" name="sets" ref={register} />
                <input type="text" placeholder="Weight" name="weight" ref={register} />
                <select name="effortId" placeholder="" ref={register}>

                    <option value="0">---Your effort on a scale 1-10---</option>
                    {effort.map(effort => (<option key={effort.id} value={effort.id}>
                        {effort.description}
                    </option>))}
                </select>

                <input type="text" placeholder="Attitude" name="attitude" ref={register} />
                <input type="text" placeholder="Time" name="workoutTime" ref={register} />
                <input type="hidden" value={new Date().toLocaleDateString('en-US')} name="date" ref={register} />

                <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register} />
                <Button type="submit">Submit</Button>
            </form>
        </>
    )

}


