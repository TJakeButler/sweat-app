import React, { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { ExerciseLogContext } from './ExerciseLogProvider'
import { EffortContext } from '../effort/EffortProvider'
import { ExerciseTypeContext } from "../exercise/ExeriseTypeProvider";
import {Button} from 'reactstrap'

export const ExerciseLogForm = (props) => {
      // Use the required context providers for data
    const { exerciseLogs, addExerciseLog, getExerciseLogs, deleteExercise, updateExerciseLog} = useContext(ExerciseLogContext)
    const { effort, getEffort } = useContext(EffortContext)
    const { exerciseTypes, getExerciseTypes } = useContext(ExerciseTypeContext)
    // Component state
    const [editLogObj, setEditLogObj] = useState({})


    console.log(props.location.data)
    // Is there a a URL parameter??
    const editMode = props.match.params.hasOwnProperty("exerciseLog")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        console.log("********handleControlledInputChange Executes***********")
        console.log(event.target)
        console.log("current state variable editLogObj", editLogObj)
    
        const newEditLogObj = Object.assign({}, editLogObj)
        console.log("new object that's a copy of editLogObj state variable", newEditLogObj)
    
        newEditLogObj[event.target.name] = event.target.value
        console.log("newEditLogObj after modification", newEditLogObj)
    
        setEditLogObj(newEditLogObj)
      }

      const getLogInEditMode = () => {
        if (editMode) {
          const exerciseLogId = parseInt(props.match.params.id)
          const selectedLog = exerciseLogs.find(el => el.id === exerciseLogId) || {}
          setEditLogObj(selectedLog)
        }
      }

    // Get data from API when component initializes
    useEffect(() => {
        getExerciseTypes()
        .then(getExerciseLogs)
        .then(getEffort)
       
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
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <select  name="exerciseTypeId" placeholder="" ref={register}>

                    <option value="0">---Select Your Exercise Type---</option>
                    {exerciseTypes.map(exerciseTypes => {

                        if (exerciseTypes.userId === currentlyLoggedInuser) {
                            
                            return (<option key={exerciseTypes.id} value={exerciseTypes.id}>
                                {exerciseTypes.name}
                            </option>)
                        }
                    })}
                

                </select>
                </div>
                <div className="form-group">    
                <input className="form-control form-control-lg" type="text" placeholder="Sets" name="sets" ref={register} />
                </div>
                <div className="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Weight" name="weight" ref={register} />
                </div>
                <div className="form-group">
                <select name="effortId" placeholder="" ref={register}>

                    <option value="0">---Your effort on a scale 1-10---</option>
                    {effort.map(effort => (<option key={effort.id} value={effort.id}>
                        {effort.description}
                    </option>))}
                </select>
                </div>        
                <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Attitude" name="attitude" ref={register} />
                </div>
                <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Time" name="workoutTime" ref={register} />
                </div>
                <input  type="hidden" value={new Date().toLocaleDateString('en-US')} name="date" ref={register} />

                <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register} />
                <Button type="submit">Submit</Button>
            </form>
        </>
    )

}


