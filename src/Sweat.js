import React, { useContext } from "react"
import {Route, Redirect} from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
// import { ExerciseTypeContext } from "./components/exercise/ExeriseType"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationViews"



export const Sweat = () => {

// const {exerciseTypes, addExerciseType, getExerciseTypes} = useContext(ExerciseTypeContext)

    return (<>
      <Route render={() => {
          // The user id is saved under the key app_user_id in local Storage. Change below if needed!
          if (localStorage.getItem("app_user_id")) {
              return (
                  <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        
    </>
    )
    }
