/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './NavBurger.module.scss';
import { NavLink } from 'react-router-dom';
import { setNarcoticAC } from '../../redux/narcotics-reducer';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

/**
 * need to add collapse menu link click
 */
class NavBurger extends React.Component {

  componentDidMount() {

  }

  render() {
    const { setNarcoticAC, navBurgerState } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom" className={classes.burgerWrapper}>
        <Navbar.Brand href="/main">НІ НАРКОТИКАМ. КОМ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`${classes.navWraper}`} >

            <div className={`${classes.itemNarkoMobile} ${classes.accent}`}>
              <NavLink to="/main" onClick={() => { setNarcoticAC('FAQ', navBurgerState.FAQ) }} activeClassName={classes.active}>Головна</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile} ${classes.active}`}>
              <NavLink to="/faq" onClick={() => { setNarcoticAC("FAQ", navBurgerState.FAQ) }} activeClassName={classes.active}>Поширені&nbsp;запитання</NavLink>
            </div>

            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/narcotics" onClick={() => { setNarcoticAC("Narcotics", navBurgerState.Narcotics) }} activeClassName={classes.active}>Дія&nbsp;наркотиків</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/konopli" onClick={() => { setNarcoticAC("Konopli", navBurgerState.Konopli) }} activeClassName={classes.active}>Коноплі</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/opium" onClick={() => { setNarcoticAC("Opium", navBurgerState.Opium) }} activeClassName={classes.active}>Опіум</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/barbiturati" onClick={() => { setNarcoticAC("Barbiturati", navBurgerState.Barbiturati) }} activeClassName={classes.active}>Барбітурати</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/salt" onClick={() => { setNarcoticAC("Salt", navBurgerState.Salt) }} activeClassName={classes.active}>Сіль</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/lsd" onClick={() => { setNarcoticAC("Lsd", navBurgerState.Lsd) }} activeClassName={classes.active}>ЛСД</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/cocaine" onClick={() => { setNarcoticAC("Cocaine", navBurgerState.Cocaine) }} activeClassName={classes.active}>КокаЇн</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/heroine" onClick={() => { setNarcoticAC("Heroine", navBurgerState.Heroine) }} activeClassName={classes.active}>Героїн</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/ketamine" onClick={() => { setNarcoticAC("Ketamine", navBurgerState.Ketamine) }} activeClassName={classes.active}>Кетамін</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/durman" onClick={() => { setNarcoticAC("Durman", navBurgerState.Durman) }} activeClassName={classes.active}>Дурман</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/psylocibe" onClick={() => { setNarcoticAC("Psylocibe", navBurgerState.Psylocibe) }} activeClassName={classes.active}>Псилоцибін</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/fenciklidin" onClick={() => { setNarcoticAC("Fen", navBurgerState.Fen) }} activeClassName={classes.active}>Фенциклідин</NavLink>
            </div>

          </Nav>

          <Nav className={`${classes.navWraper}`}>
            <div className={`${classes.itemNarkoMobile} ${classes.accentGreen}`}>
              <NavLink to="/book-a-lecture" onClick={() => { setNarcoticAC("BookLecture", navBurgerState.BookLecture) }} activeClassName={classes.active}>Замовити&nbsp;лекцію</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/get-consultation" onClick={() => { setNarcoticAC("Consult", navBurgerState.Consult) }} activeClassName={classes.active}>Отримати&nbsp;консультацію</NavLink>
            </div>

            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/dmaa" onClick={() => { setNarcoticAC("DMAA", navBurgerState.DMAA) }} activeClassName={classes.active}>DMAA</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/mdma" onClick={() => { setNarcoticAC("MDMA", navBurgerState.MDMA) }} activeClassName={classes.active}>MDMA Екстазі</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/alcohol" onClick={() => { setNarcoticAC("Alcohol", navBurgerState.Alcohol) }} activeClassName={classes.active}>Алкоголь</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/tramadol" onClick={() => { setNarcoticAC("Tramadol", navBurgerState.Tramadol) }} activeClassName={classes.active}>Трамадол</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/toxicomany" onClick={() => { setNarcoticAC("Toxic", navBurgerState.Toxic) }} activeClassName={classes.active}>Токсикоманія</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/ephedrin" onClick={() => { setNarcoticAC("Ephedrin", navBurgerState.Ephedrin) }} activeClassName={classes.active}>Ефедрин</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/morphine" onClick={() => { setNarcoticAC("Morphine", navBurgerState.Morphine) }} activeClassName={classes.active}>Морфін</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/mak-snodiyniy" onClick={() => { setNarcoticAC("Poppy", navBurgerState.Poppy) }} activeClassName={classes.active}>Мак снодійний</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/pervitin" onClick={() => { setNarcoticAC("Pervitin", navBurgerState.Pervitin) }} activeClassName={classes.active}>Первітин</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/meskalin" onClick={() => { setNarcoticAC("Meskalin", navBurgerState.Meskalin) }} activeClassName={classes.active}>Мескалін</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/codeine" onClick={() => { setNarcoticAC("Codeine", navBurgerState.Codeine) }} activeClassName={classes.active}>Кодеїн</NavLink>
            </div>
            <div className={`${classes.itemNarkoMobile}`}>
              <NavLink to="/narcotics/methadone" onClick={() => { setNarcoticAC("Methadone", navBurgerState.Methadone) }} activeClassName={classes.active}>Метадон</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}

// export default Nav;

// let mapStateToProps = (state) => ({
//   navBurgerState: state
// });

export default connect(
  state => ({
    navBurgerState: state.narcoticsReducer
  }),
  dispatch => {
    return bindActionCreators({
      setNarcoticAC: setNarcoticAC,
    }, dispatch);
  }
)(NavBurger);