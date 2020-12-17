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
    const [exerciseLogObj, setExerciseLogObj] = useState({})


    console.log("**Object passed via props**", props.location.data)
    console.log("**Props**", props)
    
    // Is there a a URL parameter??
    const editMode = props.match.params.hasOwnProperty("exerciseLog")
    


    const getLogInEditMode = () => {
        if (editMode) {
          const exerciseLogId = parseInt(props.match.params.exerciseLog)
          const selectedLog = exerciseLogs.find(e => e.id === exerciseLogId) || {}
          setExerciseLogObj(selectedLog)

          console.log(exerciseLogId)
          console.log(selectedLog)
          
        }
        console.log("what we are looking for", exerciseLogObj)
      }
   

    // Get data from API when component initializes
    useEffect(() => {
        getExerciseTypes()
        .then(getExerciseLogs)
        .then(getEffort)
       
    }, [])

     // Once provider state is updated, determine the animal (if edit)
  useEffect(() => {
    getLogInEditMode()
  }, [])

console.log(exerciseLogObj)




    const { register, handleSubmit } = useForm();
    const currentlyLoggedInuser = parseInt(localStorage.getItem("app_user_id"))

    const onSubmit = (data) => {
        data["userId"] = parseInt(data.userId)
        data["sets"] = parseInt(data.sets)
        data["weight"] = parseInt(data.weight)
        data["workoutTime"] = parseInt(data.workoutTime)
        data["exerciseTypeId"] = parseInt(data.exerciseTypeId)
        data["effortId"] = parseInt(data.effortId)

        console.log("DATA**", data)
        if(editMode) {
            const editedLogObj = {
                attitude: data.attitude,
                date: data.date,
                effortId: data.effortId,
                exerciseTypeId: data.exerciseTypeId,
                id: exerciseLogObj.id,
                sets: data.sets,
                userId: data.userId,
                weight: data.weight,
                workoutTime: data.workoutTime
            }
            updateExerciseLog(editedLogObj)
            
            .then(() => props.history.push("/exerciseLogs"))
        }
        else{

        
        console.log("add fired")
        addExerciseLog(data).then(() => props.history.push('/exerciseLogs'))
        }
    }

    


    return (
        <>
            <h1>Log your new exercise!</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <select  name="exerciseTypeId" placeholder="" ref={register} defaultValue={exerciseLogObj.exerciseTypeId}> 

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
                <input className="form-control form-control-lg" type="text" placeholder="Sets" name="sets" ref={register}  defaultValue={exerciseLogObj.sets}/>
                </div>

                <div className="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Weight" name="weight" ref={register} defaultValue={exerciseLogObj.weight}/>
                </div>
                <div className="form-group">
                <select name="effortId" placeholder="" ref={register} defaultValue={exerciseLogObj.effortId} >

                    <option value="0">---Your effort on a scale 1-10---</option>
                    {effort.map(effort => (<option key={effort.id} value={effort.id}>
                        {effort.description}
                    </option>))}
                </select>
                </div>        
                <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Attitude" name="attitude" ref={register} defaultValue={exerciseLogObj.attitude}/>
                </div>
                <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Time" name="workoutTime" ref={register} defaultValue={exerciseLogObj.workoutTime} />
                </div>
                <input  type="hidden" value={new Date().toLocaleDateString('en-US')} name="date" ref={register} />

                <input type="hidden" name="userId" value={localStorage.getItem("app_user_id")} ref={register} />
                <Button type="submit">Submit</Button>
            </form>
        </>
    )

}


