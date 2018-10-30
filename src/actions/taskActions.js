export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const INCOMPLETE_TASK = 'INCOMPLETE_TASK';
export const CLEAR_COMPLETED_TASKS = 'CLEAR_COMPLETED_TASKS';

export function addTask(task) {
    const dateString = new Date().toISOString()
    return { 
        type: ADD_TASK, 
        payload: { 
            id: dateString,
            value: task,
            date: dateString
        } 
    }
}

export function completeTask(id) {
    return { type: COMPLETE_TASK, payload: id }
}

export function incompleteTask(id) {
    return { type: INCOMPLETE_TASK, payload: id }
}

export function clearCompletedTasks() {
    return { type: CLEAR_COMPLETED_TASKS }
}