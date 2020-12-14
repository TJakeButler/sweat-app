import React, { useContext } from "react"
import {ExerciseTypeContext} from './ExeriseTypeProvider'


export const ExerciseType = ({ ExerciseTypeObj }) => {
const {deleteExerciseLog} = useContext(ExerciseTypeContext)
return <>
  <section>
    <h3>ExerciseType Name:{ExerciseTypeObj.name}</h3>
<div>ExerciseTypeID:{ExerciseTypeObj.id}</div>
<div>User ID:{ExerciseTypeObj.userId}</div>
<button
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

