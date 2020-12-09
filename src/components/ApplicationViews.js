import React from 'react'
import {ExerciseTypeProvider} from "./exercise/ExeriseTypeProvider"
import {ExerciseTypeList} from "./exercise/ExeriseTypeList"
import {Route} from "react-router-dom"


import { ExerciseLogProvider } from './exerciseLog/ExerciseLogProvider'
import { ExerciseLogList } from './exerciseLog/ExerciseLogList'

import {ExerciseTypeForm} from './exercise/ExerciseTypeForm'


export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    You're at the Home Page!
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

        
        <Route path="/form">
            <ExerciseTypeForm ></ExerciseTypeForm>
        </Route>
        
        </>
    )
}