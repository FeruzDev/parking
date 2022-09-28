import React from 'react';
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";
import {BrowserRouter, Link, Route, Router,Routes,  Switch} from "react-router-dom";

import Map from "./Map";
import Cabinet from "./Cabinet";
import SideBar from "./SideBar";
import PersonalCabinet from "../pages/PersonalCabinet";

const Main = () => {
    return (
            <div className="App">
                <BrowserRouter>

                    <Switch>
                        <Route exact path="/" component={Map} />
                        <Route exact path="/cabinet" component={Cabinet } />
                        <Route exact path="/personal-cabinet" component={PersonalCabinet } />
                    </Switch>
                    {/*<Footer />*/}

                </BrowserRouter>

            </div>
    );
};

export default Main;