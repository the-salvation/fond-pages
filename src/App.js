import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Toggle from "./Common/Preloader/Toggle/Toggle";
import NarcotisContainer from "./components/Narcotics/NarcoticasContainer";
import store from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header />
                <Nav store={store} />
                <Toggle
                    render={({ on, Toggle }) => (
                        <div>
                            {/* <button onClick={Toggle}>k</button> */}
                            {on && <Nav />}
                        </div>
                    )}
                />

                <div className={classes.app_wrapper_content}>
                    <Switch>
                        <Route
                            path="/profile"
                            render={() => <ProfileContainer />}
                        />
                        <Route
                            path="/narcotics"
                            render={() => <NarcotisContainer store={store} />}
                        />
                        <Route
                            exact
                            path="/narcotics/opium"
                            render={() => <NarcotisContainer store={store} />}
                        />
                        <Route
                            exact
                            path="/narcotics/barbiturati"
                            render={() => <NarcotisContainer store={store} />}
                        />
                        <Route
                            exact
                            path="/narcotics/cocaine"
                            render={() => <NarcotisContainer store={store} />}
                        />
                    </Switch>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
