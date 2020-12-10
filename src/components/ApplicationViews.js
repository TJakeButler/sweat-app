import React from 'react'
import {ExerciseTypeProvider} from "./exercise/ExeriseTypeProvider"
import {ExerciseTypeList} from "./exercise/ExeriseTypeList"
import {Route} from "react-router-dom"


import { ExerciseLogProvider } from './exerciseLog/ExerciseLogProvider'
import { ExerciseLogList } from './exerciseLog/ExerciseLogList'

import {ExerciseTypeForm} from './exercise/ExerciseTypeForm'
import {ExerciseLogForm} from './exerciseLog/ExerciseLogForm'


export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <h1>You're at the Home Page!</h1>
                </Route>
            

            <ExerciseTypeProvider>
                {/* Render the exerciseTypes list when http://localhost:3000/exerciseTypes */}
                <Route path="/exerciseTypes">
                    <ExerciseTypeList />
                </Route>
            </ExerciseTypeProvider>
        

        <ExerciseLogProvider>
            <Route path="/exerciseLogs">
                <ExerciseLogList></ExerciseLogList>
            </Route>
        </ExerciseLogProvider>

        <ExerciseTypeProvider>
        <Route path="/newExerciseTypeform">
            <ExerciseTypeForm ></ExerciseTypeForm>
        </Route>
        </ExerciseTypeProvider>

        
        <Route path="/newExerciseLogform">
            <ExerciseLogForm ></ExerciseLogForm>
        </Route>
        
        </>
    )
}