import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import classNames from 'classnames';

const sortTasks = tasks => (a, b) => {
    if (tasks[a].finished && !tasks[b].finished) {
        return 1;
    } else if (!tasks[a].finished && tasks[b].finished) {
        return -1;
    } else {
        return new Date(tasks[a].date) - new Date(tasks[b].date)
    }
}

export default ({ tasks, onCompleteTask, onIncompleteTask, className }) => <ul className={classNames(styles.todoList, className)}>
    {
        Object.keys(tasks).sort(sortTasks(tasks)).map((id) => (
            <TodoItem
                key={id}
                {...tasks[id]}
                onCompleteTask={() => onCompleteTask(id)}
                onIncompleteTask={() => onIncompleteTask(id)}
            />
        ))
    }
</ul>