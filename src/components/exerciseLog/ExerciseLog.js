import React, {useContext} from "react"
import {ExerciseLogContext} from "./ExerciseLogProvider"


export const ExerciseLog = ({ ExerciseLogObj }) => {
  const {deleteExercise} = useContext(ExerciseLogContext)
   
  return <>
  <section className="">
    <h3 className="">Exercise Log ID:{ExerciseLogObj.id}</h3>
<div className="">UserId:{ExerciseLogObj.userId}</div>
<div className="">ExerciseType ID:{ExerciseLogObj.exerciseTypeId}</div>
<div className="">Sets:{ExerciseLogObj.sets}</div>
<div className="">Weight:{ExerciseLogObj.weight}</div>
<div className="">Effort ID: {ExerciseLogObj.effortId}</div>
<div className="">Minutes:{ExerciseLogObj.workoutTime}</div>
<div className="">Date:{ExerciseLogObj.date}</div>
<button className="btn--release"
        onClick={() => {
            deleteExercise(ExerciseLogObj.id)
            .then(() => {
              // ExerciseLogObj.history.push("/exerciseLogs")
            })
        }}
>Delete Exercise</button>
  </section>
  </>
      }