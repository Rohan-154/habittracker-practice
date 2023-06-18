import React, { useState, useContext } from "react";
import { HabitContext } from "./App";
import Habit from "./Habit";

function HabitPage() {
  const { state, dispatch } = useContext(HabitContext);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    goal: "",
    times: "",
    start: "",
    end: ""
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_HABIT", payload: { ...formState, id: Date.now() } });
    setFormState({
      name: "",
      goal: "",
      times: "",
      start: "",
      end: ""
    });
    setDialogOpen(false);
  };

  return (
    <div className="habit-page">
      <h1>Habit Tracker</h1>
      <button className="add-habit-btn" onClick={() => setDialogOpen(true)}>
        Add a new habit
      </button>
      {isDialogOpen && (
        <div className="habit-form">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formState.name}
            />
            <select name="goal" onChange={handleChange} value={formState.goal}>
              <option value="">Select a goal</option>
              <option value="Goal 1">Goal 1</option>
              <option value="Goal 2">Goal 2</option>
            </select>
            <select
              name="times"
              onChange={handleChange}
              value={formState.times}
            >
              <option value="">Select times</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input
              name="start"
              type="date"
              onChange={handleChange}
              value={formState.start}
            />
            <input
              name="end"
              type="date"
              onChange={handleChange}
              value={formState.end}
            />
            <button type="submit">Add New Habit</button>
            <button type="button" onClick={() => setDialogOpen(false)}>
              Close
            </button>
          </form>
        </div>
      )}
      <div className="habit-list">
        {state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
}

export default HabitPage;
