import React, {Component} from "react";

import {ReflexContainer, ReflexSplitter} from "react-reflex";
import Details from "./components/Details";
import Search from "./components/Search";

export default class ReflexDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

    }

    toggleSearch() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="demo-basic-splitter">
                <div className="action-panel">
                    <button
                        onClick={() => this.toggleSearch()}>{this.state.show ? 'Hide search component' : 'Show search component'}</button>
                </div>
                <ReflexContainer orientation="vertical">
                    <Search hideMe={() => this.toggleSearch()} style={{display: this.state.show ? 'block' : 'none'}}/>
                    <ReflexSplitter style={{display: this.state.show ? 'block' : 'none'}}/>
                    <Details/>
                </ReflexContainer>
            </div>
        )
    }
}