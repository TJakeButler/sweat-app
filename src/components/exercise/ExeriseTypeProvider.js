import React, { useState } from "react"


/*
    The context is imported and used by individual components
    that need data
*/
export const ExerciseTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ExerciseTypeProvider = (props) => {
    const [exerciseTypes, setExerciseTypes] = useState([]) // Inital value of state variable, a function to set the value of the state variable.

    const getExerciseTypes = () => {
        return fetch("http://localhost:8088/exerciseTypes")
            .then(res => res.json())
            .then(setExerciseTypes)
    }

    const addExerciseType = add => {
        return fetch("http://localhost:8088/exerciseTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(add)
        })
            .then(getExerciseTypes)
    }
    const deleteExerciseLog = exerciseTypeId => {
        return fetch(`http://localhost:8088/exerciseTypes/${exerciseTypeId}`, {
            method: "DELETE"
        })
            .then(getExerciseTypes)
    }

    return (
        <ExerciseTypeContext.Provider value={{
            exerciseTypes, addExerciseType, getExerciseTypes, deleteExerciseLog
        }}>
            {props.children}
        </ExerciseTypeContext.Provider>
    )
}