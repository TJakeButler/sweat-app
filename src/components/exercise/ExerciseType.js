import React, { useContext } from "react"
import {ExerciseTypeContext} from './ExeriseTypeProvider'
import {Button} from 'reactstrap'


export const ExerciseType = ({ ExerciseTypeObj }) => {
const {deleteExerciseLog} = useContext(ExerciseTypeContext)
return <>
<div className="card">
  <section>
    <div className="card-header">
    <h3>ExerciseType Name:{ExerciseTypeObj.name}</h3>
    </div>
    <div className="card-body">
<div>ExerciseTypeID:{ExerciseTypeObj.id}</div>
<div>User ID:{ExerciseTypeObj.userId}</div>
</div>
<Button
        onClick={() => {
          deleteExerciseLog(ExerciseTypeObj.id)
           
        }}
>Delete Exercise</Button>
  </section>
  </div>
  </>
}


// ****** THIS MODULE IS A CARD THAT ACCEPTS AN EXERCISE TYPE OBJECT THAT RETURNS A JSX ELEMENT WITH HTML TO BE RENDERED TO THE DOM, THIS MODULE HANDLES THE EXERCISE TYPE WHICH WILL THEN BE ABLE TO BE DELETED FROM THE DOM VIA THE EXERCISE TYPE LIST. // 

