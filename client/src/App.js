import React, { Component } from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import Toggle from "./Common/Preloader/Toggle/Toggle";
import NarcotisContainer from "./components/Narcotics/NarcoticasContainer";
import store from "./redux/state";
import BookLectureContainer from "./components/BookLectureContainer/BookLectureContainer";
import { BrowserView,MobileView} from "react-device-detect";
import NavBurger from "./components/NavBurger/NavBurger";
import FaqPageContainer from "./components/FaqPage/FaqPageContainer";

// const App123 = (props) => {
//     return (
//         <BrowserRouter>
//             <div className={classes.app}>
//                 <BrowserView viewClassName={classes.app_wrapper_header}>
//                     {/* <div className={classes.app_wrapper_header}>
//                         <Header />
//                     </div> */}
//                         <Header />
//                 </BrowserView>
//                 <div className={classes.app_wrapper}>
//                     <div className={classes.app_wrapper_nav}>
//                         <MobileView viewClassName={classes.mobileBurger}>
//                             <NavBurger store={store}/>
//                         </MobileView>
//                         <BrowserView viewClassName={classes.browserNav}>
//                             <Nav store={store} />
//                             <Toggle
//                                 render={({ on, Toggle }) => (
//                                     <div className={classes.app_wrapper_toggle}>
//                                         {/* <button onClick={Toggle}>k</button> */}
//                                         {on && <Nav />}
//                                     </div>
//                                 )}
//                             />
//                         </BrowserView>
//                     </div>
//                     <div className={classes.app_wrapper_content}>
//                         <Switch>
//                             <Route
//                                 path="/main"
//                                 render={() => <MainPageContainer store={store} />}
//                             />
//                             <Route
//                                 path="/faq"
//                                 render={() => <FaqPageContainer store={store} />}
//                             />
//                             <Route
//                                 path="/narcotics"
//                                 render={() => <NarcotisContainer store={store} />}
//                             />
//                             <Route
//                                 path="/book-a-lecture"
//                                 render={() => <BookLectureContainer store={store} />}
//                             />
//                             <Route render={() => <MainPageContainer store={store} />}
//                             />
//                         </Switch>
//                     </div>
//                 </div>
                
//                 <BrowserView viewClassName={classes.browserFooter}>
//                     <Footer/>

//                 </BrowserView>
//             </div>
//         </BrowserRouter>
//     );
// };


class App extends Component {
    
    state = {
        data: null
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
    this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
        // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    };
    
    render() {
        console.log(this.state.data);
        return (
            <BrowserRouter>
                <div className={classes.app}>
                    <BrowserView viewClassName={classes.app_wrapper_header}>
                        {/* <div className={classes.app_wrapper_header}>
                            <Header />
                        </div> */}
                            <Header />
                    </BrowserView>
                    <div className={classes.app_wrapper}>
                        <div className={classes.app_wrapper_nav}>
                            <MobileView viewClassName={classes.mobileBurger}>
                                <NavBurger store={store}/>
                            </MobileView>
                            <BrowserView viewClassName={classes.browserNav}>
                                <Nav store={store} />
                                <Toggle
                                    render={({ on, Toggle }) => (
                                        <div className={classes.app_wrapper_toggle}>
                                            {/* <button onClick={Toggle}>k</button> */}
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
                                    render={() => <MainPageContainer store={store} />}
                                />
                                <Route
                                    path="/faq"
                                    render={() => <FaqPageContainer store={store} />}
                                />
                                <Route
                                    path="/narcotics"
                                    render={() => <NarcotisContainer store={store} />}
                                />
                                <Route
                                    path="/book-a-lecture"
                                    render={() => <BookLectureContainer store={store} />}
                                />
                                <Route render={() => <MainPageContainer store={store} />}
                                />
                            </Switch>
                        </div>
                    </div>
                    
                    <BrowserView viewClassName={classes.browserFooter}>
                        <Footer/>
                    </BrowserView>
                    <p className="App-intro">{this.state.data}</p>
                </div>
            </BrowserRouter>
        );
    }
};

export default App;
