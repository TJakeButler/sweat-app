import React from 'react'
import { ExerciseTypeProvider } from "./exercise/ExeriseTypeProvider"
import { ExerciseTypeList } from "./exercise/ExeriseTypeList"
import { Route } from "react-router-dom"


import { ExerciseLogProvider } from './exerciseLog/ExerciseLogProvider'
import { ExerciseLogList } from './exerciseLog/ExerciseLogList'


import { ExerciseTypeForm } from './exercise/ExerciseTypeForm'
import { ExerciseLogForm } from './exerciseLog/ExerciseLogForm'
import { EffortProvider } from './effort/EffortProvider'
import { Button } from 'reactstrap'
import logo from './img/sweatAppLogo.png'
import { ExerciseLog } from './exerciseLog/ExerciseLog'


export const ApplicationViews = (props) => {
    return (
        <>

            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <h1>You're at the Home Page!</h1>
                <img src={logo} width="300"></img>
                
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
                        <Route path="/exerciseLogs" render={
                            props => <ExerciseLogList {...props} />
                        } />
                            
                        
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
                        
                        
                        <Route exact path="/newExerciseLogform" render={
                                props => <ExerciseLogForm {...props}/>
                            } />

                        <Route exact path="/newExerciseLogform/edit/:exerciseLog(\d+)" render={
                                props =>   <ExerciseLogForm {...props}/>
                            } />
                            
                           
                        
                        
                    </ExerciseLogProvider>
                </ExerciseTypeProvider>
            </EffortProvider>





        </>
    )
}

{/* <Route path="/animals/edit/:animalId(\d+)" render={
    props => <AnimalForm {...props} />
} /> */}