import React from "react"


export const ExerciseType = ({ ExerciseTypeObj }) => (
  <section className="customer">
    <h3 className="customer__name">ExerciseType Name:{ExerciseTypeObj.name}</h3>
<div className="customer__address">ExerciseTypeID:{ExerciseTypeObj.id}</div>
<div className="customer__address">User ID:{ExerciseTypeObj.userId}</div>
  </section>
)