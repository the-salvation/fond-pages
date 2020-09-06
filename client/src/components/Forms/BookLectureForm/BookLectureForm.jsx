import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from './BookLectureForm.module.scss'


const BLForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
<<<<<<< HEAD
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form_style}>
                <div>
                    <label>Ім'я</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="Ім'я"
                        />
                    </div>
                </div>
                <div>
                    <label>Фамілія</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Фамілія"
                        />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Ваш Email"
                        />
                    </div>
                </div>
                <div>
                    <label>Телефон</label>
                    <div>
                        <Field
                            name="phone"
                            component="input"
                            type="phone"
                            placeholder="Номер телефону"
                        />
                    </div>
                </div>
                <div>
                    <label>Вік дітей</label>
                    <div>
                        <label>
                            <Field name="age" component="input" type="radio" value="yuong" />
                            {' '}
=======
        <form onSubmit={handleSubmit} className={styles.formStyle}>
            <div className={`${styles.formElements} ${styles.firstName} `}>
                <label>Ім'я</label>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="Ім'я"
                />
            </div>
            <div  className={`${styles.formElements} ${styles.lastName}`}>
                <label>Прізвище</label>
                <Field
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Прізвище"
                />
            </div>
            <div className={`${styles.formElements} ${styles.email}`}>
                <label>Email</label>
                <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Ваш Email"
                />
            </div>
            <div className={`${styles.formElements} ${styles.phone}`}>
                <label>Телефон</label>
                <Field
                    name="phone"
                    component="input"
                    type="phone"
                    placeholder="Номер телефону"
                />
            </div>
            <div className={`${styles.formElements} ${styles.age}`}>
                <label>Вік дітей</label>
                <div className={`${styles.ageInner}`}>
                    <label>
                        <Field name="age" component="input" type="radio" value="yuong" />
                        {' '}
>>>>>>> 8a0001941ab22b085ef9c17e3b160078651cb59d
                    Молодша школа
                    </label>
                        <label>
                            <Field name="age" component="input" type="radio" value="mature" />
                            {' '}
                    Старша школа
                    </label>
                    </div>
                </div>
<<<<<<< HEAD
                <div>
                    <label>Тип лекції</label>
                    <div>
                        <Field name="lectureType" component="select">
                            <option />
                            <option value="narcotics">Правда про наркотики</option>
                            <option value="aids">Правда про СНІД/ВІЛ</option>
                            <option value="fairytail">Казка для 1-3 класів</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea" />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Надіслати</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Очистити форму
=======
            </div>
            <div className={`${styles.formElements} ${styles.lectureType}`}>
                <label>Тип лекції</label>
                <Field name="lectureType" component="select">
                    <option />
                    <option value="narcotics">Правда про наркотики</option>
                    <option value="aids">Правда про СНІД/ВІЛ</option>
                    <option value="fairytail">Казка для 1-3 класів</option>
                </Field>
            </div>
            <div className={`${styles.formElements} ${styles.notes}`}>
                <label>Notes</label>
                <Field name="notes" component="textarea" />
            </div>
            <div className={`${styles.formElements} ${styles.formBtns}`}>
                <button type="submit" disabled={pristine || submitting}>Надіслати</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Очистити форму
>>>>>>> 8a0001941ab22b085ef9c17e3b160078651cb59d
                </button>
                </div>
            </form>
        </div>
    );
};

const BookLectureForm = reduxForm({
    form: 'bookLecture', // a unique identifier for this form
})(BLForm);

export default BookLectureForm;
