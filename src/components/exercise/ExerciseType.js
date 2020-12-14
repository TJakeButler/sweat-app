import React, { useContext } from "react"
import {ExerciseTypeContext} from './ExeriseTypeProvider'


export const ExerciseType = ({ ExerciseTypeObj }) => {
const {deleteExerciseLog} = useContext(ExerciseTypeContext)
return <>
  <section className="customer">
    <h3 className="customer__name">ExerciseType Name:{ExerciseTypeObj.name}</h3>
<div className="customer__address">ExerciseTypeID:{ExerciseTypeObj.id}</div>
<div className="customer__address">User ID:{ExerciseTypeObj.userId}</div>
<button className="btn--release"
        onClick={() => {
          deleteExerciseLog(ExerciseTypeObj.id)
            .then(() => {
              
            })
        }}
>Delete Exercise</button>
  </section>
  </>
}