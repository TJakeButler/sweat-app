import React, { useContext, useEffect } from "react"
import { ExerciseType } from "./ExerciseType"
import { ExerciseTypeContext } from "./ExeriseTypeProvider"


export const ExerciseTypeList = () => {
  // This state changes when `getExerciseType()` is invoked below
  const { exerciseTypes, addExerciseType, getExerciseTypes } = useContext(ExerciseTypeContext)

  useEffect(
    () => {
      console.log("ExerciseTypeList: Initial render before data")
      getExerciseTypes()
    },
    []
  )

  return (
<>
    <h1>ExerciseTypeList!</h1>
    <button onClick={() => (console.log("Add exercise button clicked!"))}>
        Create New Exercise
            </button>
    <div className="exerciseTypeList">
      {
        exerciseTypes.map(singeExerciseType => <ExerciseType key={singeExerciseType.id} ExerciseTypeObj={singeExerciseType} />)
      }
    </div>
 </>   
  )
}