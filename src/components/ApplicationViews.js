import React from 'react'
import {ExerciseTypeProvider} from "./exercise/ExeriseTypeProvider"
import {ExerciseTypeList} from "./exercise/ExeriseTypeList"
import {Route} from "react-router-dom"


import { ExerciseLogProvider } from './exerciseLog/ExerciseLogProvider'
import { ExerciseLogList } from './exerciseLog/ExerciseLogList'

import {ExerciseTypeForm} from './exercise/ExerciseTypeForm'
import {ExerciseLogForm} from './exerciseLog/ExerciseLogForm'
import { EffortProvider } from './effort/EffortProvider'
import { Button } from 'reactstrap'

export const ApplicationViews = (props) => {
    return (
        <>
            
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <h1>You're at the Home Page!</h1>
                    <Button onClick={() => {

                        localStorage.clear();
                        props.history.push("/login")
                        
                    }
                        
                }>Log Out!</Button>
                </Route>
            

            <ExerciseTypeProvider>
                {/* Render the exerciseTypes list when http://localhost:3000/exerciseTypes */}
                <Route path="/exerciseTypes">
                    <ExerciseTypeList />
                </Route>
            </ExerciseTypeProvider>
        
        <ExerciseTypeProvider>
        <EffortProvider>
        <ExerciseLogProvider>
            <Route path="/exerciseLogs">
                <ExerciseLogList></ExerciseLogList>
            </Route>
        </ExerciseLogProvider>
        </EffortProvider>
        </ExerciseTypeProvider>

        <ExerciseTypeProvider>
        <Route path="/newExerciseTypeform">
            <ExerciseTypeForm {...props} />
        </Route>
        </ExerciseTypeProvider>

        <EffortProvider>
            <ExerciseTypeProvider>
        <ExerciseLogProvider >
        <Route path="/newExerciseLogform">
            <ExerciseLogForm {...props} />
        </Route>
        </ExerciseLogProvider>
        </ExerciseTypeProvider>
        </EffortProvider>
        </>
    )
}