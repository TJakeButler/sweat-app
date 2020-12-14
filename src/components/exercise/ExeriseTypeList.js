import React, { useContext, useEffect } from "react"
import { ExerciseType } from "./ExerciseType"
import { ExerciseTypeContext } from "./ExeriseTypeProvider"
import { useForm } from "react-hook-form";


export const ExerciseTypeList = () => {
  // This state changes when `getExerciseType()` is invoked below
  const { exerciseTypes, addExerciseType, getExerciseTypes } = useContext(ExerciseTypeContext)

// currentlyLoggedInuser is setting a variable that holds the value of the currenlty logged in user held in localStorage. // 
  const currentlyLoggedInuser = parseInt(localStorage.getItem("app_user_id"))

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
    
    <>
      {
        exerciseTypes.map(singeExerciseType => {
          if (singeExerciseType.userId === currentlyLoggedInuser)

         return <ExerciseType key={singeExerciseType.id} ExerciseTypeObj={singeExerciseType} />

      })}
    </>
 </>   
  )
}


// ******* THIS MODULE IS RENDERING THE EXERCISE TYPE LIST TO THE DOM. THE LIST KNOWS WHO IS LOGGED IN BY THE CONST CURRENTLYLOGGEDINUSER, THIS CONST HOLDS THE VALUE OF THE USER IN LOCALSTORAGE. THE LIST THEN MAPS THROUGH MY ARRAY OF EXERCISETYPES AND USES AN IF CONDITIONAL TO SEE IF THE SINGLEEXERCISETYPE === CURRENTLYLOGGEDINUSER AND THEN RETURNS THE EXERCISETYPE FUNCTION AND PASSES IN THE PARAM OF EXERCISETYPEOBJ    **********//