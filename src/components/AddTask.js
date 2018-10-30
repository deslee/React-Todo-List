import React from 'react';
import { withFormik } from 'formik'
import formStyles from './Forms.module.css';
import styles from './AddTask.module.css';
import classNames from 'classnames';

const AddTaskForm = (
    {
        handleSubmit,
        isSubmitting,
        handleChange,
        handleBlur,
        touched,
        errors,
        values
    }
) => (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={classNames(styles.textInput, formStyles.textInput, { [formStyles.error]: errors.task && touched.task })}
                    type="text"
                    name="task"
                    placeholder="Task..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.task}
                />
                <button
                    className={classNames(styles.button, formStyles.button)}
                    type="submit"
                    disabled={isSubmitting}
                >
                    Submit
                </button>
            </form>
            {errors.task && touched.task && <div className={formStyles.feedback}>{errors.task}</div>}
        </div>
    )

export default withFormik({
    mapPropsToValues: () => ({ task: '' }),
    validate: values => {
        const errors = {};

        if (!values.task) {
            errors.task = 'Please enter a task'
        }

        return errors;
    },
    handleSubmit: (
        { task },
        {
            props: { onAddTask },
            resetForm
        }
    ) => {
        onAddTask(task)
        resetForm();
    }
})(AddTaskForm)