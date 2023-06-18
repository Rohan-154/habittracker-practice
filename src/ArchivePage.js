import React, { useContext } from "react";
import { HabitContext } from "./App";

function ArchivePage() {
  const { state } = useContext(HabitContext);

  return (
    <div>
      <h1>Archived Habits</h1>
      {state.archive.map((habit) => (
        <div key={habit.id}>
          <h2>{habit.name}</h2>
          <p>{habit.goal}</p>
          <p>{habit.times}</p>
          <p>{habit.start}</p>
          <p>{habit.end}</p>
        </div>
      ))}
    </div>
  );
}

export default ArchivePage;
