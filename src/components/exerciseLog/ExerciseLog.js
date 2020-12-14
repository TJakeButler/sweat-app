import React, {useContext} from "react"
import {ExerciseLogContext} from "./ExerciseLogProvider"


export const ExerciseLog = ({ ExerciseLogObj }) => {
  const {deleteExercise} = useContext(ExerciseLogContext)
   
  return <>
  <section>
    <h3>Exercise Log ID:{ExerciseLogObj.id}</h3>
<div>UserId:{ExerciseLogObj.userId}</div>
<div>ExerciseType:{ExerciseLogObj.exerciseType}</div>
<div>Sets:{ExerciseLogObj.sets}</div>
<div>Weight:{ExerciseLogObj.weight}</div>
<div>Effort: {ExerciseLogObj.effort}</div>
<div>Minutes:{ExerciseLogObj.workoutTime}</div>
<div>Date:{ExerciseLogObj.date}</div>
<button
        onClick={() => {
            deleteExercise(ExerciseLogObj.id)
            
        }}
>Delete Exercise</button>
  </section>
  </>
      }