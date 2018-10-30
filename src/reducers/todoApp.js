import { ADD_TASK, COMPLETE_TASK, INCOMPLETE_TASK, CLEAR_COMPLETED_TASKS } from "../actions/taskActions";

const initialState = {
    '2018-10-30T06:50:26.875Z': {
        text: 'Task 1',
        date: '2018-10-30T06:50:26.875Z'
    },
    '2018-10-30T06:50:28.260Z': {
        text: 'Task 2',
        date: '2018-10-30T06:50:28.260Z'
    },
    '2018-10-30T06:50:29.408Z': {
        text: 'Task 3',
        date: '2018-10-30T06:50:29.408Z'
    }
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                [action.payload.id]: {
                    text: action.payload.value,
                    finished: false
                }
            }
        case COMPLETE_TASK:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    finished: new Date().toISOString()
                }
            }
        case INCOMPLETE_TASK:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    finished: false
                }
            }
        case CLEAR_COMPLETED_TASKS:
            return {
                ...Object.keys(state).reduce((nextState, id) => {
                    if (!state[id].finished) {
                        nextState[id] = state[id];
                    }
                    return nextState;
                }, {})
            }
        default:
            return state;
    }
}