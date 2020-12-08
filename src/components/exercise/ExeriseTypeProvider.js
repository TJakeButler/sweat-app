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
    const [exerciseTypes, setExerciseTypes] = useState([])

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

    return (
        <ExerciseTypeContext.Provider value={{
            exerciseTypes, addExerciseType, getExerciseTypes
        }}>
            {props.children}
        </ExerciseTypeContext.Provider>
    )
}