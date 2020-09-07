import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from './BookLectureForm.module.scss'

const BLForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className={styles.formStyle} > 
            <div className={`${styles.formElements} ${styles.firstName} `}>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                />
                <label className={styles.labelName}>
                    <span className={styles.contentName}>Ім'я</span>
                </label>
            </div>
            <div  className={`${styles.formElements} ${styles.lastName}`}>
                <label className={styles.labelName}> 
                    <span className={styles.contentName}>Прізвище</span> 
                </label>
                <Field
                    name="lastName"
                    component="input"
                    type="text"
                />
            </div>
            <div className={`${styles.formElements} ${styles.email}`}>
                <label className={styles.labelName}> 
                    <span className={styles.contentName}>Email</span> 
                </label>
                <Field
                    name="email"
                    component="input"
                    type="email"
                />
            </div>
            <div className={`${styles.formElements} ${styles.phone}`}>
                <label className={styles.labelName}> 
                    <span className={styles.contentName}>Телефон</span> 
                </label>
                <Field
                    name="phone"
                    component="input"
                    type="phone"
                />
            </div>
            {/* <div className={`${styles.formElements} ${styles.age}`}>
                <label>Вік дітей</label>
                <div className={`${styles.ageInner}`}>
                    <label>
                        <Field name="age" component="input" type="radio" value="yuong" />
                        {' '}
                    Молодша школа
                    </label>
                        <label>
                            <Field name="age" component="input" type="radio" value="mature" />
                            {' '}
                    Старша школа
                    </label>
                    </div>
            </div>
            <div className={`${styles.formElements} ${styles.lectureType}`}>
                <label>Тип лекції</label>
                <Field name="lectureType" component="select">
                    <option />
                    <option value="narcotics">Правда про наркотики</option>
                    <option value="aids">Правда про СНІД/ВІЛ</option>
                    <option value="fairytail">Казка для 1-3 класів</option>
                </Field>
            </div> */}
            {/* <div className={`${styles.formElements} ${styles.notes}`}>
                <label>Notes</label>
                <Field name="notes" component="textarea" />
            </div> */}
            <div className={`${styles.formElements} ${styles.formBtns}`}>
                <button type="submit" disabled={pristine || submitting} onClick={reset}>
                    Надіслати
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Очистити форму
                </button>
                </div>
            </form>
    );
};

const BookLectureForm = reduxForm({
    form: 'bookLecture', // a unique identifier for this form
})(BLForm);

export default BookLectureForm;
