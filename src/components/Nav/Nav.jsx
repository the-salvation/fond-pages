/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import classes from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import Toggle from '../../Common/Preloader/Toggle/Toggle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNarcoticAC } from '../../redux/narcotics-reducer';
import { setFaqAC } from '../../redux/faqPage-reducer';
import { setBookAC } from '../../redux/bookLecture-reducer';
import { setConsultAC } from '../../redux/getConsult-reducer';
import PropTypes from 'prop-types';



class Nav extends React.Component {

  render() {
    const { setNarcoticAC, allNarcotics } = this.props;

    return (
      <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/main" activeClassName={classes.active}>Головна</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/book-a-lecture" onClick={() => { setBookAC("BookLecture"); }} activeClassName={classes.active}>Замовити&nbsp;лекцію</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/get-consultation" onClick={() => { setConsultAC("Consult"); }} activeClassName={classes.active}>Отримати&nbsp;консультацію</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/faq" onClick={() => { setFaqAC("FAQ"); }} activeClassName={classes.active}>Поширені&nbsp;запитання</NavLink>
        </div>
        <Toggle render={({ on, Toggle }) => (
          <div className={classes.item}>
            <div className={classes.item}>
              <a onClick={Toggle} href="#" className={classes.active}>Правда&nbsp;про&nbsp;наркотики</a>
            </div>
            {
              on &&
              <div className={classes.item}>
                {
                  allNarcotics.map(narcotic => {
                    return (
                      <div key={narcotic.name} className={`${classes.itemNarko}`}>
                        <NavLink to={`/narcotics/${narcotic.name}`} onClick={() => { setNarcoticAC(narcotic.name); }} activeClassName={classes.active}>{narcotic.descr}</NavLink>
                      </div>
                    );
                  })
                }
              </div>
            }
          </div>
        )}
        />
        <br />
      </nav>
    );

  }
}

Nav.propTypes = {
  setNarcoticAC: PropTypes.func,
  allNarcotics: PropTypes.array
};

export default connect(
  state => ({
    allNarcotics: state.narcoticsReducer.allNarcotics
  }),
  dispatch => {
    return bindActionCreators({
      setNarcoticAC: setNarcoticAC
    }, dispatch);
  }
)(Nav);
