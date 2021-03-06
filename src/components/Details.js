import React, {Component} from "react";
import {ReflexElement} from "react-reflex";

class Details extends Component {
    render() {
        return (
            <ReflexElement className="left-pane" {...this.props}>
                <div className="pane-content">
                    Details component
                </div>
            </ReflexElement>
        )
    }
}

export default Details;