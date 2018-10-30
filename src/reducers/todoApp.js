import { ADD_TASK, COMPLETE_TASK, INCOMPLETE_TASK, CLEAR_COMPLETED_TASKS } from "../actions/taskActions";
import moment from 'moment';

const initialState = {
    [moment().subtract(7, 'm').toDate().toISOString()]: {
        id: moment().subtract(7, 'm').toDate().toISOString(),
        text: 'Task 1',
        date: moment().subtract(7, 'm').toDate().toISOString(),
        finished: false
    },
    [moment().subtract(5, 'm').toDate().toISOString()]: {
        id: moment().subtract(5, 'm').toDate().toISOString(),
        text: 'Task 2',
        date: moment().subtract(5, 'm').toDate().toISOString(),
        finished: false
    },
    [moment().subtract(3, 'm').toDate().toISOString()]: {
        id: moment().subtract(3, 'm').toDate().toISOString(),
        text: 'Task 3',
        date: moment().subtract(3, 'm').toDate().toISOString(),
        finished: false
    }
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                [action.payload.id]: {
                    text: action.payload.value,
                    date: action.payload.date,
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