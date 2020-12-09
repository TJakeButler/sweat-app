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
    <div className="">
      {
        exerciseTypes.map(singleExerciseType => <ExerciseType key={exerciseTypes.id} ExerciseTypeObj={singleExerciseType} />)
      }
    </div>
  )
}