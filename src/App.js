import React from 'react';
import AddTask from './components/AddTask';
import { connect } from 'react-redux';
import { addTask, completeTask, incompleteTask, clearCompletedTasks } from './actions/taskActions';
import getTasks from './selectors/getTasks';
import TodoList from './components/TodoList';
import formStyles from './components/Forms.module.css';
import styles from './App.module.css';

const mapStateToProps = (state) => ({
    tasks: getTasks(state)
})
const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(addTask(task)),
    markTaskAsComplete: (id) => dispatch(completeTask(id)),
    markTaskAsIncomplete: (id) => dispatch(incompleteTask(id)),
    clearCompletedTasks: () => dispatch(clearCompletedTasks())
})

const App = ({
    addTask, tasks, 
    markTaskAsComplete, markTaskAsIncomplete, clearCompletedTasks
}) => (
    <div className={styles.app}>
        <AddTask onAddTask={addTask} />
        <TodoList className={styles.todoList} tasks={tasks} onCompleteTask={markTaskAsComplete} onIncompleteTask={markTaskAsIncomplete} />
        <div className={styles.controls}>
            <button className={formStyles.button} disabled={Object.keys(tasks).filter(id => tasks[id].finished).length === 0} onClick={clearCompletedTasks}>Clear finished</button>
            <span className={styles.status}>Remaining: {Object.keys(tasks).filter(id => !tasks[id].finished).length}</span>
        </div>
    </div>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);