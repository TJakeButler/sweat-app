import React, { useContext, useEffect } from "react"
import { ExerciseLogContext } from "./ExerciseLogProvider"
import {Button} from 'reactstrap'
import { EffortContext } from "../effort/EffortProvider"
import {ExerciseTypeContext, ExerciseTypeProvider} from '../exercise/ExeriseTypeProvider'
import { ExerciseLogList } from "./ExerciseLogList"


export const ExerciseLog = ({ ExerciseLogObj}) => {
  const { deleteExercise } = useContext(ExerciseLogContext)
  const {effort, getEffort} = useContext(EffortContext)
  const {exerciseTypes, getExerciseTypes} = useContext(ExerciseTypeContext)
  let description = ""
  let foundExerciseType = ""
  useEffect(
    () => {
      
      getEffort()
      console.log(effort)
    },
    []
  )
  useEffect(
    () => {
      
      console.log(effort)
    },
    [effort]
  )
  useEffect(
    () => {
      
      getExerciseTypes()
      console.log(exerciseTypes)
    },
    []
  )
  useEffect(
    () => {
      
      console.log(exerciseTypes)
    },
    [exerciseTypes]
  )

   exerciseTypes.find(exerciseType => {
     if (ExerciseLogObj.exerciseTypeId === exerciseType.id) {
      foundExerciseType = exerciseType.name
      console.log("This is Found Exercise Type!", foundExerciseType)
     }
     
   })
  
  effort.find((effort) => {
    if (ExerciseLogObj.effortId === effort.id) {
      console.log(effort)
      description = effort.description
      console.log(description)
      
    }
    
  })

  return <>
  <div className="card">
    <section>
      <div className="card-header">
      <h3>Exercise Log ID:{ExerciseLogObj.id}</h3>
      </div>
      <div className="card-body">
      <div>UserId:{ExerciseLogObj.userId}</div>
      <div>ExerciseType:{foundExerciseType}</div>
      <div>Sets:{ExerciseLogObj.sets}</div>
      <div>Weight:{ExerciseLogObj.weight}</div>
      <div>Effort: {description}</div>
      <div>Minutes:{ExerciseLogObj.workoutTime}</div>
      <div>Date:{ExerciseLogObj.date}</div>
      </div>
      <Button
        onClick={() => {
          deleteExercise(ExerciseLogObj.id)

        }}
      >Delete Exercise</Button>
    </section>
    </div>
  </>
}

