import React, { useContext, useEffect } from "react"
import { ExerciseLog } from "./ExerciseLog"
import { ExerciseLogContext } from "./ExerciseLogProvider"

export const ExerciseLogList = () => {
  // This state changes when `getExerciseLogs()` is invoked below
  const { exerciseLogs, addExerciseLog, getExerciseLogs } = useContext(ExerciseLogContext)
  // currentlyLoggedInuser is setting a variable that holds the value of the currenlty logged in user held in localStorage. // 

  const currentlyLoggedInuser = parseInt(localStorage.getItem("app_user_id"))

// This useEffect is only being ran on render of the list and not again.
  useEffect(
    () => {
      console.log("ExerciseLogList: Initial render before data")
      getExerciseLogs()
    },
    []
  )

// The map function is iterating over the array of exercise logs, every singleExerciseLog that is being passed in if the singleExerciseLog.userId === to the currentlyLoggedInuser which value is the session storage id then it will invoke the ExerciseLog function imported through ExerciseLogContext and will only pass in the ExerciseLogObj that have a matching userId to the currenlty logged in session storageId.

  return (

    <>
      {
        exerciseLogs.map(singleExerciseLog => {
          if (singleExerciseLog.userId === currentlyLoggedInuser)

            return <ExerciseLog key={singleExerciseLog.id} ExerciseLogObj={singleExerciseLog} />
        })}
    </>
  )
}