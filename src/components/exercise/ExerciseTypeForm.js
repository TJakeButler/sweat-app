import React from "react"
import { useForm } from "react-hook-form";


export const ExerciseTypeForm = () => {
    const {register, handleSubmit } = useForm(); 
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="New Exercise" name="New Exercise"></input>
            <input type="submit"></input>
        </form>
    )
}

