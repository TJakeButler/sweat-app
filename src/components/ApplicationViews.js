import React from 'react'
import {ExerciseTypeProvider} from "./exercise/ExeriseTypeProvider"
import {Route} from "react-router-dom"




export const ApplicationViews = (props) => {
    return (
        <>
        <Route exact path="/">
        <ExerciseTypeProvider />
        </Route>
        </>
    )
}