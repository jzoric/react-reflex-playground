import React, {Component} from "react";

import {ReflexContainer} from "react-reflex";
import Details from "./components/Details";
import Splitter from "./components/Splitter";
import Search from "./components/Search";

export default class ReflexDemo extends Component {

    render() {
        return (
            <div className="demo-basic-splitter">
                <ReflexContainer orientation="vertical">
                    <Search/>
                    <Splitter/>
                    <Details/>
                </ReflexContainer>
            </div>
        )
    }
}