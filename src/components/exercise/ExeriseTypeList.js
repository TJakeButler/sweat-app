import React, { useContext, useEffect } from "react"
// import { Customer } from "./Customer"
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
    <div className="customers">
      {
        exerciseTypes.map(singeExerciseType => <ExerciseType key={exerciseTypes.id} ExerciseTypeObj={singeExerciseType} />)
      }
    </div>
  )
}