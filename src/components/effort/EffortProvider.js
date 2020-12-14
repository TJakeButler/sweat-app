import React, { useState } from "react"

// ******** THE EFFORT PROVIDER HANDLES THE LOGIC FOR DOING A FETCH REQUEST FROM MY JSON SERVER. THE EFFORTCONTEXT IS EXPORTING BOTH GETEFFORT AND EFFORT TO BE USED BY OTHER COMPONENTS ***** // 


/*
    The context is imported and used by individual components
    that need data
*/
export const EffortContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const EffortProvider = (props) => {
    const [effort, setEffort] = useState([]) // Inital value of state variable, a function to set the value of the state variable.

    const getEffort = () => {
        return fetch("http://localhost:8088/effort")
            .then(res => res.json())
            .then(setEffort)
    }

    return (
        <EffortContext.Provider value={{
            effort, getEffort
        }}>
            {props.children}
        </EffortContext.Provider>
    )
}

// What I did with this module to create a drop down menu: I created this provider to create a getEffort fetch GET Method // 

