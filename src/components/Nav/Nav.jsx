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
    const { setNarcoticAC } = this.props;
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
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/narcotics" onClick={() => { setNarcoticAC("Narcotics"); }} activeClassName={classes.active}>Дія&nbsp;наркотиків</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/konopli" onClick={() => { setNarcoticAC("Konopli"); }} activeClassName={classes.active}>Коноплі</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/opium" onClick={() => { setNarcoticAC("Opium"); }} activeClassName={classes.active}>Опіум</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/barbiturati" onClick={() => { setNarcoticAC("Barbiturati"); }} activeClassName={classes.active}>Барбітурати</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/salt" onClick={() => { setNarcoticAC("Salt"); }} activeClassName={classes.active}>Сіль</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/lsd" onClick={() => { setNarcoticAC("Lsd"); }} activeClassName={classes.active}>ЛСД</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/cocaine" onClick={() => { setNarcoticAC("Cocaine"); }} activeClassName={classes.active}>КокаЇн</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/heroine" onClick={() => { setNarcoticAC("Heroine"); }} activeClassName={classes.active}>Героїн</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/ketamine" onClick={() => { setNarcoticAC("Ketamine"); }} activeClassName={classes.active}>Кетамін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/durman" onClick={() => { setNarcoticAC("Durman"); }} activeClassName={classes.active}>Дурман</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/dmaa" onClick={() => { setNarcoticAC("DMAA"); }} activeClassName={classes.active}>DMAA</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/mdma" onClick={() => { setNarcoticAC("MDMA"); }} activeClassName={classes.active}>MDMA Екстазі</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/alcohol" onClick={() => { setNarcoticAC("Alcohol"); }} activeClassName={classes.active}>Алкоголь</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/tramadol" onClick={() => { setNarcoticAC("Tramadol"); }} activeClassName={classes.active}>Трамадол</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/toxicomany" onClick={() => { setNarcoticAC("Toxic"); }} activeClassName={classes.active}>Токсикоманія</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/ephedrin" onClick={() => { setNarcoticAC("Ephedrin"); }} activeClassName={classes.active}>Ефедрин</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/morphine" onClick={() => { setNarcoticAC("Morphine"); }} activeClassName={classes.active}>Морфін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/mak-snodiyniy" onClick={() => { setNarcoticAC("Poppy"); }} activeClassName={classes.active}>Мак снодійний</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/pervitin" onClick={() => { setNarcoticAC("Pervitin"); }} activeClassName={classes.active}>Первітин</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/meskalin" onClick={() => { setNarcoticAC("Meskalin"); }} activeClassName={classes.active}>Мескалін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/psylocibe" onClick={() => { setNarcoticAC("Psylocibe"); }} activeClassName={classes.active}>Псилоцибін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/fenciklidin" onClick={() => { setNarcoticAC("Fen"); }} activeClassName={classes.active}>Фенциклідин</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/codeine" onClick={() => { setNarcoticAC("Codeine"); }} activeClassName={classes.active}>Кодеїн</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/methadone" onClick={() => { setNarcoticAC("Methadone"); }} activeClassName={classes.active}>Метадон</NavLink>
                </div>

                {/* {this.navs} */}

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

// export default Nav;

// let mapStateToProps = (state) => ({
//   state: state
// });

Nav.propTypes = {
  setNarcoticAC: PropTypes.string
};

export default connect(
  state => ({
    // : state.narcoticsReducer
  }),
  dispatch => {
    return bindActionCreators({
      setNarcoticAC: setNarcoticAC
    }, dispatch);
  }
)(Nav);
