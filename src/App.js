import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import classes from './App.module.scss';
import store from './redux/redux-store';
import Toggle from './Common/Preloader/Toggle/Toggle';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import NavBurger from './components/NavBurger/NavBurger';
import MainPageContainer from './components/MainPage/MainPageContainer';
import NarcotisContainer from './components/Narcotics/NarcoticasContainer';
import BookLectureContainer from './components/BookLectureContainer/BookLectureContainer';
import FaqPageContainer from './components/FaqPageContainer/FaqPageContainer';
import ConsultPageContainer from './components/ConsultPageContainer/ConsultPageContainer';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={classes.app}>
            <BrowserView viewClassName={classes.app_wrapper_header}>
              <Header />
            </BrowserView>
            <div className={classes.app_wrapper}>
              <div className={classes.app_wrapper_nav}>
                <MobileView viewClassName={classes.mobileBurger}>
                  <NavBurger />
                </MobileView>
                <BrowserView viewClassName={classes.browserNav}>
                  <Nav />
                  <Toggle
                    render={({ on }) => (
                      <div className={classes.app_wrapper_toggle}>
                        {on && <Nav />}
                      </div>
                    )}
                  />
                </BrowserView>
              </div>
              <div className={classes.app_wrapper_content}>
                <Switch>
                  <Route
                    path="/main"
                    render={() => <MainPageContainer />}
                  />
                  <Route
                    path="/faq"
                    render={() => <FaqPageContainer />}
                  />
                  <Route
                    path="/get-consultation"
                    render={() => <ConsultPageContainer />}
                  />
                  <Route
                    path="/narcotics"
                    render={() => <NarcotisContainer />}
                  />
                  <Route
                    path="/book-a-lecture"
                    render={() => <BookLectureContainer />}
                  />
                  <Route render={() => <MainPageContainer />}
                  />
                </Switch>
              </div>
            </div>

            <BrowserView viewClassName={classes.browserFooter}>
              <Footer />
            </BrowserView>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;
