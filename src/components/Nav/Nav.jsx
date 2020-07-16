/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import Toggle from '../../Common/Preloader/Toggle/Toggle';
import { setNarcoticAC } from '../../redux/narcotics-reducer';
import { connect } from 'react-redux';

class Nav extends React.Component {
    
    render() {
        console.log(this.props);
        return (
            <nav className={classes.nav}>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/profile" activeClassName={classes.active}>Головна</NavLink>
                </div>
                <Toggle render={({ on, Toggle }) => (
                    <div className={classes.item}>
                        {/* <button onClickCapture>k</button> */}
                        <div className={classes.item}>
                            <a onClick={Toggle} href="#" className={classes.active}>Правда&nbsp;про&nbsp;наркотики</a>
                        </div>
                        {
                            on &&
                            <div className={classes.item}>
                                <div className={`${classes.itemNarko}` }>
                                    <NavLink to="/narcotics/opium" onClick={ () => { this.props.setNarcoticAC("Opiumm", this.props.store.Opium)}} activeClassName={classes.active}>Опіум</NavLink>
                                </div>
                                <div className={`${classes.itemNarko}`}>
                                    <NavLink to="/narcotics/barbiturati" onClick={ () => { this.props.setNarcoticAC("Barbituratii", this.props.store.Barbiturati)}} activeClassName={classes.active}>Барбітурати</NavLink>
                                </div>
                                <div className={`${classes.itemNarko}`}>
                                    <NavLink to="/narcotics/lsd" onClick={ () => { this.props.setNarcoticAC("Lsd", this.props.store.Lsd)}} activeClassName={classes.active}>ЛСД</NavLink>
                                </div>
                                <div className={`${classes.itemNarko}`}>
                                    <NavLink to="/narcotics/cocaine" onClick={ () => { this.props.setNarcoticAC("Cocaine", this.props.store.Cocaine)}} activeClassName={classes.active}>КокаЇн</NavLink>
                                </div>
                                <div className={`${classes.itemNarko}`}>
                                    <NavLink to="/narcotics/durman" onClick={ () => { this.props.setNarcoticAC("Durman", this.props.store.Durman)}} activeClassName={classes.active}>Дурман</NavLink>
                                </div>
                                <div className={`${classes.itemNarko}`}>
                                    <NavLink to="/narcotics/dmaa" onClick={ () => { this.props.setNarcoticAC("DMAA", this.props.store.DMAA)}} activeClassName={classes.active}>DMAA</NavLink>
                                </div>
                                <div className={`${classes.itemNarko}`}>
                                    <NavLink to="/narcotics/mdma" onClick={ () => { this.props.setNarcoticAC("MDMA", this.props.store.MDMA)}} activeClassName={classes.active}>MDMA Екстазі</NavLink>
                                </div>
                                <div className={`${classes.itemNarko}`}>
                                    <NavLink to="/narcotics/alcohol" onClick={ () => { this.props.setNarcoticAC("Alcohol", this.props.store.Alcohol)}} activeClassName={classes.active}>Алкоголь</NavLink>
                                </div>
                                
                            </div>
                        }
                    </div>
                )}
                />
                <br />

            </nav>
        )

    }
}

// export default Nav;

let mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, {setNarcoticAC})(Nav);