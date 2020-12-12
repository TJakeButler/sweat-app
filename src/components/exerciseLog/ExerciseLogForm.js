import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form";
import { ExerciseLogContext } from './ExerciseLogProvider'
import { EffortContext } from '../effort/EffortProvider'
import { ExerciseTypeContext } from "../exercise/ExeriseTypeProvider";
// import {ExerciseTypeContext} from '../exercise/ExerciseTypeProvider'




export const ExerciseLogForm = (props) => {
    const { addExerciseLog } = useContext(ExerciseLogContext)
    const { effort, getEffort } = useContext(EffortContext)
    const { exerciseTypes, getExerciseTypes } = useContext(ExerciseTypeContext)

    useEffect(() => {
        getEffort()
        console.log(effort)
    }, [])

    useEffect(() => {
        console.log('useEffect state', effort)
    }, [effort])

    useEffect(() => {
        getExerciseTypes()
        console.log(exerciseTypes)
    }, [])

    useEffect(() => {
        console.log('useEffect state', exerciseTypes)
    }, [exerciseTypes])


    const { register, handleSubmit } = useForm();
    const currentlyLoggedInuser = parseInt(localStorage.getItem("app_user_id"))

    const onSubmit = (data) => {
        data["userId"] = parseInt(data.userId)
        data["sets"] = parseInt(data.sets)
        data["weight"] = parseInt(data.weight)
        // data["effortId"] = parseInt(data.effortId)
        data["workoutTime"] = parseInt(data.workoutTime)
        // data["exerciseType"] = parseInt(data.exerciseType)

        addExerciseLog(data).then(() => props.history.push('/exerciseLogs'))
        console.log(data)
    }

    return (
        <>
            <h1>Log your new exercise!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="exerciseType" placeholder="" ref={register}>

                    <option value="0">---Select Your Exercise Type---</option>
                    {exerciseTypes.map(exerciseTypes => {


                        if (exerciseTypes.userId === currentlyLoggedInuser) {
                            { console.table("This is exerciseTypes for logged in user!", exerciseTypes.userId) }

                            return (<option key={exerciseTypes.id} value={exerciseTypes.name}>
                                {exerciseTypes.name}
                            </option>)
                        }
                    })}


                </select>

                <input type="text" placeholder="Sets" name="sets" ref={register} />
                <input type="text" placeholder="Weight" name="weight" ref={register} />
                {/* <input type="text" placeholder="Effort" name="effortId" ref={register}/> */}
                <select name="effort" placeholder="" ref={register}>

                    <option value="0">---Your effort on a scale 1-10---</option>
                    {effort.map(effort => (<option key={effort.id} value={effort.description}>
                        {effort.description}
                    </option>))}
                </select>

                <input type="text" placeholder="Attitude" name="attitude" ref={register} />
                <input type="text" placeholder="Time" name="workoutTime" ref={register} />
                <input type="hidden" value={new Date().toLocaleDateString('en-US')} name="date" ref={register} />

                <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register} />
                <button type="submit">Submit</button>
            </form>
        </>
    )

}


