import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './BookLectureForm.module.scss';
import PropTypes from 'prop-types';

export default class BLForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    classNum: "",
    email: "",
    phone: "",
    emailStatus: "",
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submitForm = (e) => {
    const { firstName, lastName, classNum, email, phone } = this.state;

    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.addEventListener("load", () => {
      // console.log(xhr.responseText);

      // console.log("inside" + this.state);
      this.setState({
        emailStatus: xhr.responseText,
      });
    });

    xhr.open(
      "GET",
      "https://fondnn.org.ua/index.php?sendto=" +
        email +
        "&firstName=" +
        firstName +
        "&lastName=" +
        lastName +
        "&classNum=" +
        classNum +
        "&phone=" +
        phone
    );

    xhr.send();

    e.perventDefault();
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { firstName, lastName, classNum, email, phone } = this.state;

    return (
      // {this.emailStatus ? this.emailStatus : null}
      <form onSubmit={this.submitForm} className={styles.formStyle}>
        <input type="hidden" value="nothing"></input>
        <div className={`${styles.formElements} ${styles.firstName} `}>
          <Field
            name="firstName"
            onChange={this.handleChange("firstName")}
            value={firstName}
            component="input"
            type="text"
            autoComplete="old-password"
          />
          <label className={styles.labelName}>
            <span className={styles.contentName}>Ім'я</span>
          </label>
        </div>
        <div className={`${styles.formElements} ${styles.lastName}`}>
          <Field
            name="lastName"
            onChange={this.handleChange("lastName")}
            value={lastName}
            component="input"
            type="text"
            autoComplete="old-password"
          />
          <label className={styles.labelName}>
            <span className={styles.contentName}>Прізвище</span>
          </label>
        </div>
        <div className={`${styles.formElements} ${styles.email}`}>
          <Field
            name="email"
            onChange={this.handleChange("email")}
            value={email}
            component="input"
            type="text"
            autoComplete="old-password"
          />
          <label className={styles.labelName}>
            <span className={styles.contentName}>Email</span>
          </label>
        </div>
        <div className={`${styles.formElements} ${styles.email}`}>
          <Field
            name="classNum"
            onChange={this.handleChange("classNum")}
            value={classNum}
            component="input"
            type="text"
            autoComplete="old-password"
          />
          <label className={styles.labelName}>
            <span className={styles.contentName}>Какой класс?</span>
          </label>
        </div>
        <div className={`${styles.formElements} ${styles.phone}`}>
          <Field
            name="phone"
            onChange={this.handleChange("phone")}
            value={phone}
            component="input"
            type="phone"
            autoComplete="league-of-legends"
          />
          <label className={styles.labelName}>
            <span className={styles.contentName}>Телефон</span>
          </label>
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
          <button
            type="submit"
            disabled={pristine || submitting}
            onClick={handleSubmit}
          >
            Надіслати
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Очистити форму
          </button>
        </div>
      </form>
    );
  }
}

// const BLForm = props => {
//     const { handleSubmit, pristine, reset, submitting } = props;
//     return (
//         <form onSubmit={handleSubmit} className={styles.formStyle}  >
//         <input type='hidden' value='nothing'></input>
//             <div className={`${styles.formElements} ${styles.firstName} `}>
//                 <Field
//                     name="firstName"
//                     component="input"
//                     type="text"
//                     autoComplete="new-password"
//                 />
//                 <label className={styles.labelName}>
//                     <span className={styles.contentName}>Ім'я</span>
//                 </label>
//             </div>
//             <div  className={ `${styles.formElements} ${styles.lastName}`}>
//                 <Field
//                     name="lastName"
//                     component="input"
//                     type="text"
//                     autoComplete="okay-bro"
//                 />
//                 <label className={styles.labelName}>
//                     <span className={styles.contentName}>Прізвище</span>
//                 </label>
//             </div>
//             <div className={`${styles.formElements} ${styles.email}`}>
//                 <Field
//                     name="email"
//                     component="input"
//                     type="email"
//                 />
//                 <label className={styles.labelName}>
//                     <span className={styles.contentName}>Email</span>
//                 </label>
//             </div>
//             <div className={`${styles.formElements} ${styles.phone}`}>
//                 <Field
//                     name="phone"
//                     component="input"
//                     type="phone"
//                     autoComplete="league-of-legends"
//                 />
//                 <label className={styles.labelName}>
//                     <span className={styles.contentName}>Телефон</span>
//                 </label>
//             </div>
//             {/* <div className={`${styles.formElements} ${styles.age}`}>
//                 <label>Вік дітей</label>
//                 <div className={`${styles.ageInner}`}>
//                     <label>
//                         <Field name="age" component="input" type="radio" value="yuong" />
//                         {' '}
//                     Молодша школа
//                     </label>
//                         <label>
//                             <Field name="age" component="input" type="radio" value="mature" />
//                             {' '}
//                     Старша школа
//                     </label>
//                     </div>
//             </div>
//             <div className={`${styles.formElements} ${styles.lectureType}`}>
//                 <label>Тип лекції</label>
//                 <Field name="lectureType" component="select">
//                     <option />
//                     <option value="narcotics">Правда про наркотики</option>
//                     <option value="aids">Правда про СНІД/ВІЛ</option>
//                     <option value="fairytail">Казка для 1-3 класів</option>
//                 </Field>
//             </div> */}
//             {/* <div className={`${styles.formElements} ${styles.notes}`}>
//                 <label>Notes</label>
//                 <Field name="notes" component="textarea" />
//             </div> */}
//             <div className={`${styles.formElements} ${styles.formBtns}`}>
//                 <button type="submit" disabled={pristine || submitting} onClick={reset}>
//                     Надіслати
//                 </button>
//                 <button type="button" disabled={pristine || submitting} onClick={reset}>
//                     Очистити форму
//                 </button>
//                 </div>
//             </form>
//     );
// };

BLForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
};

BLForm = reduxForm({
  form: "bookLecture", // a unique identifier for this form
})(BLForm);
