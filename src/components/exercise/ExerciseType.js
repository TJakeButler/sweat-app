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


// ****** THIS MODULE IS A CARD THAT ACCEPTS AN EXERCISE TYPE OBJECT THAT RETURNS A JSX ELEMENT WITH HTML TO BE RENDERED TO THE DOM, THIS MODULE HANDLES THE EXERCISE TYPE WHICH WILL THEN BE ABLE TO BE DELETED FROM THE DOM VIA THE EXERCISE TYPE LIST. // 

