import React, { useState, useContext } from "react";
import { HabitContext } from "./App";

function Habit({ habit }) {
  const { dispatch } = useContext(HabitContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState(habit);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch({ type: "EDIT_HABIT", payload: formState });
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_HABIT", payload: habit.id });
  };

  const handleArchive = () => {
    dispatch({ type: "ARCHIVE_HABIT", payload: habit });
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <h2>{habit.name}</h2>
          <p>{habit.goal}</p>
          <p>{habit.times}</p>
          <p>{habit.start}</p>
          <p>{habit.end}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleArchive}>Archive</button>
        </>
      ) : (
        <form>
          <input name="name" onChange={handleChange} value={formState.name} />
          <input name="goal" onChange={handleChange} value={formState.goal} />
          <input name="times" onChange={handleChange} value={formState.times} />
          <input name="start" onChange={handleChange} value={formState.start} />
          <input name="end" onChange={handleChange} value={formState.end} />
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default Habit;
