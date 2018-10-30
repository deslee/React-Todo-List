import React from 'react';
import styles from './TodoItem.module.css';
import moment from 'moment';
import classNames from 'classnames';

export default ({ text, finished, date, onCompleteTask, onIncompleteTask }) => (
    <li
        className={styles.todoItem}
        onClick={() => finished === false ? onCompleteTask() : onIncompleteTask()}
    >
        <input
            type='checkbox'
            checked={finished}
            onChange={() => finished === false ? onCompleteTask() : onIncompleteTask()} 
        />
        &nbsp;
        <span
            className={classNames({ [styles.finished]: Boolean(finished) })}
        >
            {text}
        </span>
        {!finished && <span className={styles.finishedText}>Created {moment(date).fromNow()}</span>}
        {finished && <span className={styles.finishedText}>Completed {moment(finished).fromNow()}</span>}
    </li>
)