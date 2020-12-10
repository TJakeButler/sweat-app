import React, { useState } from "react"
// Exercise Log is the the data stored for each individual log of a workout for a user.

/*
    The context is imported and used by individual components
    that need data
*/
export const ExerciseLogContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ExerciseLogProvider = (props) => {
    const [exerciseLogs, setExerciseLogs] = useState([]) // Inital value of state variable, a function to set the value of the state variable.

    const getExerciseLogs = () => {
        return fetch("http://localhost:8088/exerciseLogs")
            .then(res => res.json())
            .then(setExerciseLogs)
    }

    const addExerciseLog = add => {
        return fetch("http://localhost:8088/exerciseLogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(add)
        })
            .then(getExerciseLogs)
    }

    const deleteExercise = exerciseLogId => {
        return fetch(`http://localhost:8088/exerciseLogs/${exerciseLogId}`, {
            method: "DELETE"
        })
            .then(getExerciseLogs)
    }

    return (
        <ExerciseLogContext.Provider value={{
            exerciseLogs, addExerciseLog, getExerciseLogs, deleteExercise
        }}>
            {props.children}
        </ExerciseLogContext.Provider>
    )
}