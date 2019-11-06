export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

export const myReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                todos: state.todos.map(todo => {
                    if (action.payload === todo.id) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
            };


        case 'ADD':
            return {
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
        case 'CLEAR':
            return {
                todos: state.todos.filter(item => !item.completed)
            };
        default:
            return state;
    }
};