export const initialState = [
  {
    item: 'wash hands',
    completed: false,
    id: 42069
  }
]

export const myReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return (
        [...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      )

    case 'TOGGLE_COMPLETE':
      console.log(action.payload)
      return (
        state.map(i => {
          if(i.id === action.payload) {
            return {...i,
            completed: !i.completed}
          } else {
            return i;
          }
        })
      )
          
    case 'CLEAR_COMPLETE':
      return (
        state.filter(i => {
          return i.completed === false
        })
      )

    default:
      return state;
  }
}