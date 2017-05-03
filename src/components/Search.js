import React, {Component} from "react";
import {ReflexElement} from "react-reflex";

class Search extends Component {
    render() {
        return (
            <ReflexElement className="left-pane" {...this.props}>
                <button onClick={() => this.props.hideMe()}>Hide me!</button>
                <div className="pane-content">
                    Search component
                </div>
            </ReflexElement>
        )
    }
}

export default Search;