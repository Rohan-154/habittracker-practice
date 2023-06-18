export default function HabitReducer(state, action) {
  switch (action.type) {
    case "ADD_HABIT":
      return {
        ...state,
        habits: [...state.habits, action.payload]
      };
    case "EDIT_HABIT":
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.payload.id ? action.payload : habit
        )
      };
    case "DELETE_HABIT":
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload)
      };
    case "ARCHIVE_HABIT":
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload.id),
        archive: [...state.archive, action.payload]
      };
    default:
      return state;
  }
}
