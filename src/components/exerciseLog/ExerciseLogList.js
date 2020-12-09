import React, { useContext, useEffect } from "react"
import { ExerciseLog } from "./ExerciseLog"
import { ExerciseLogContext } from "./ExerciseLogProvider"

export const ExerciseLogList = () => {
  // This state changes when `getExerciseType()` is invoked below
  const { exerciseLogs, addExerciseLog, getExerciseLogs } = useContext(ExerciseLogContext)

  useEffect(
    () => {
      console.log("ExerciseLogList: Initial render before data")
      getExerciseLogs()
    },
    []
  )

  return (
    <div className="">
      {
        exerciseLogs.map(singeExerciseLog => <ExerciseLog key={exerciseLogs.id} ExerciseLogObj={singeExerciseLog} />)
      }
    </div>
  )
}