import React, { useContext, useEffect } from "react"
import { ExerciseType } from "./ExerciseType"
import { ExerciseTypeContext } from "./ExeriseTypeProvider"
import { useForm } from "react-hook-form";
// export const ExerciseTypeForm = () => {
//     const {register, handleSubmit } = useForm(); 
//     const onSubmit = data => console.log(data)

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" placeholder="New Exercise" name="New Exercise" ref={register}></input>
//             <input type="submit"></input>
//         </form>
//     )
// }

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