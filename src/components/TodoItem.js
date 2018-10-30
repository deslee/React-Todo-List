import React from 'react';
import styles from './TodoItem.module.css';
import moment from 'moment';
import classNames from 'classnames';

// FlipMove does not work with stateless functional components. Its children must be a class
export default class TodoItem extends React.Component {
    render() {
        const { text, finished, date, onCompleteTask, onIncompleteTask } = this.props;

        return (
            <li
                className={styles.todoItem}
                onClick={() => finished === false ? onCompleteTask() : onIncompleteTask()}
            >
                <input
                    type='checkbox'
                    checked={Boolean(finished)}
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
        );
    }
}