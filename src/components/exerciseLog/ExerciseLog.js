import React, { useContext, useEffect, useState } from "react"
import { ExerciseLogContext } from "./ExerciseLogProvider"
import { Button } from 'reactstrap'
import { EffortContext } from "../effort/EffortProvider"
import { ExerciseTypeContext, ExerciseTypeProvider } from '../exercise/ExeriseTypeProvider'
import { ExerciseLogList } from "./ExerciseLogList"
import { Link } from 'react-router-dom'


export const ExerciseLog = (props) => {
  const { exerciseLogs, addExerciseLog, getExerciseLogs, deleteExercise, updateExerciseLog } = useContext(ExerciseLogContext)
  const { effort, getEffort } = useContext(EffortContext)
  const { exerciseTypes, getExerciseTypes } = useContext(ExerciseTypeContext)
  let description = ""
  let foundExerciseType = ""
     // Component state
  
     
  const [ExerciseLogObj, setLogObj] = useState({})

  

    // Is there a a URL parameter??
    
  

  useEffect(
    () => {
      getExerciseLogs()
      .then(getEffort)
      .then(getExerciseTypes)
      
    },
    []
  )
  
  
  exerciseTypes.find(exerciseType => {
    if (props.ExerciseLogObj.exerciseTypeId === exerciseType.id) {
      foundExerciseType = exerciseType.name
      
    }

  })

  effort.find((effort) => {
    if (props.ExerciseLogObj.effortId === effort.id) {
      
      description = effort.description
      

    }

  })

  return <>
    <div className="card">
      <section>
        <div className="card-header">
          <h3>Exercise Log ID:{props.ExerciseLogObj.id}</h3>
        </div>
        <div className="card-body">
          <div>UserId:{props.ExerciseLogObj.userId}</div>
          <div>ExerciseType:{foundExerciseType}</div>
          <div>Sets:{props.ExerciseLogObj.sets}</div>
          <div>Weight:{props.ExerciseLogObj.weight}</div>
          <div>Effort: {description}</div>
          <div>Minutes:{props.ExerciseLogObj.workoutTime}</div>
          <div>Date:{props.ExerciseLogObj.date}</div>
        </div>
        <Button
          onClick={() => {
            deleteExercise(props.ExerciseLogObj.id)

          }}
        >Delete Exercise</Button>
        {/* <Link to={'/newexerciseLogForm/edit:exerciseTypeId(\d+)'}>
          <Button color="primary">Edit Button</Button>
        </Link> */}
        
          <Button color="primary" onClick={() => {
              props.history.push(`/newExerciseLogform/edit/${props.ExerciseLogObj.id}`)
          }}>Edit
          </Button>

      </section>
    </div>
  </>
}

{/* <div className="animal__owner">Customer: {customer.name}</div>

<button onClick={() => {
    props.history.push(`/animals/edit/${animal.id}`)
}}>Edit</button> */}